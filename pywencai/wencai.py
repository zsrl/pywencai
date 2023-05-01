import os
import execjs
import json
import requests as rq
import pandas as pd
import time
import logging
from fake_useragent import UserAgent

ua = UserAgent()

logging.basicConfig(
    level=logging.INFO,
    format='[pywencai] %(asctime)s - %(levelname)s - %(message)s'
)

# 获取token
def get_token():
  with open(os.path.join(os.path.dirname(__file__), 'hexin-v.js'), 'r') as f:
    jscontent = f.read()
  context= execjs.compile(jscontent)
  return context.call("v")

# 获取condition
def get_robot_data(**kwargs):
  retry = kwargs.get('retry', 10)
  sleep = kwargs.get('sleep', 0)
  question = kwargs.get('query')
  log = kwargs.get('log', False)
  query_type = kwargs.get('query_type', 'stock')
  cookie = kwargs.get('cookie', None)
  data = {
    'perpage': 10,
    'page': 1,
    'source': 'Ths_iwencai_Xuangu',
    'secondary_intent': query_type,
    'question': question
  }

  count = 0
  log and logging.info(f'获取condition开始')

  while count < retry :
    time.sleep(sleep)
    res = rq.request(
      method='POST',
      url='http://www.iwencai.com/customized/chart/get-robot-data',
      json=data,
      headers={
        'hexin-v': get_token(),
        'User-Agent': ua.random,
        'cookie': cookie
      }
    )
    result = json.loads(res.text)
    content = result['data']['answer'][0]['txt'][0]['content']
    if type(content) == str:
      content = json.loads(content)
    components0 = content['components'][0]
    meta = components0['data']['meta']
    params = {}
    if meta:
      params = {
        'condition': components0['data']['meta']['extra']['condition'],
        'comp_id': components0['cid'],
        'uuid': components0['puuid']
      }
    else:
      datas = components0['data']['datas']
      params = {
        'datas': pd.DataFrame.from_dict(datas)
      }
    
    log and logging.info(f'获取get_robot_data成功')
    return params
  log and logging.info(f'获取get_robot_data失败')
  return None

# 替换key
def replace_key(key):
    key_map = {
        'question': 'query',
        'sort_key': 'urp_sort_index',
        'sort_order': 'urp_sort_way'
    }
    return key_map.get(key, key)


# 获取每页数据
def get_page(**kwargs):
  retry = kwargs.pop('retry', 10)
  sleep = kwargs.pop('sleep', 0)
  log = kwargs.pop('log', False)
  cookie = kwargs.pop('cookie', None)

  data = {
    'perpage': 100,
    'page': 1,
    'source': 'Ths_iwencai_Xuangu',
    **kwargs
  }
  count = 0
  log and logging.info(f'第{data.get("page")}页开始')

  while count < retry :
    time.sleep(sleep)
    try: 
      res = rq.request(
        method='POST',
        url='http://www.iwencai.com/gateway/urp/v7/landing/getDataList',
        data=data,
        headers={
          'hexin-v': get_token(),
          'User-Agent': ua.random,
          'cookie': cookie
        },
        timeout=(5, 10)
      )
      result = json.loads(res.text)
      list = result['answer']['components'][0]['data']['datas']
      log and logging.info(f'第{data.get("page")}页成功')
      return pd.DataFrame.from_dict(list)
    except:
      log and logging.warning(f'{count+1}次尝试失败')
      count+=1
  log and logging.error(f'第{data.get("page")}页失败')
  return pd.DataFrame.from_dict([])
  

# 是否继续循环
def can_loop(loop, count):
  if (loop is True):
    return True
  else: 
    return count < loop

# 循环分页
def loop_page(loop, **kwargs):
  count = 0
  resultPageLen = 1
  result = None
  if 'page' not in kwargs:
    kwargs['page'] = 1
  initPage = kwargs['page']

  while resultPageLen > 0 and can_loop(loop, count):
    kwargs['page'] = initPage + count
    resultPage = get_page(**kwargs)
    resultPageLen = len(resultPage)
    count = count + 1
    if result is None:
      result = resultPage
    else:
      result = pd.concat([result, resultPage], ignore_index=True)
  
  return result

# 获取结果
def get(loop=False, **kwargs):
  kwargs = {replace_key(key): value for key, value in kwargs.items()}
  params = get_robot_data(**kwargs)
  datas = params.get('datas', None)
  if datas is not None:
    return datas
  else:
    kwargs = {**kwargs, **params}
    if loop:
      return loop_page(loop, **kwargs)
    else:
      return get_page(**kwargs)

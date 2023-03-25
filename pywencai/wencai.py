import os
import execjs
import json
import requests as rq
import pandas as pd
import time
import logging

logging.basicConfig(
    level=logging.INFO,
    format='[pywencai] %(asctime)s - %(levelname)s - %(message)s'
)

# 获取token
def getToken():
  with open(os.path.join(os.path.dirname(__file__), 'hexin-v.js'), 'r') as f:
    jscontent = f.read()
  context= execjs.compile(jscontent)
  return context.call("v")

# 替换key
def replace_key(key):
    key_map = {
        'question': 'query',
        'sort_key': 'urp_sort_index',
        'sort_order': 'urp_sort_way'
    }
    return key_map.get(key, key)

# 获取comp_id和uuid
def getIds(query_type):
  ids_map = {
    'stock': {
      'comp_id': 6623802,
      'uuid': 24087
    },
    'zhishu': {
      'comp_id': 5473251,
      'uuid': 24089
    },
    'fund': {
      'comp_id': 6546054,
      'uuid': 24088
    },
    'hkstock': {
      'comp_id': 6546042,
      'uuid': 18150
    },
    'usstock': {
      'comp_id': 6546050,
      'uuid': 11589
    }
  }
  return ids_map.get(query_type, {})


# 获取每页数据
def getPage(**kwargs):
  kwargs = {replace_key(key): value for key, value in kwargs.items()}
  retry = kwargs.pop('retry', 10)
  sleep = kwargs.pop('sleep', 0)
  log = kwargs.pop('log', False)

  data = {
    'perpage': 100,
    'page': 1,
    'source': 'Ths_iwencai_Xuangu',
    **getIds(kwargs.get('query_type', 'stock')),
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
          'hexin-v': getToken(),
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
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
def canLoop(loop, count):
  if (loop is True):
    return True
  else: 
    return count < loop

# 循环分页
def loopPage(loop, **kwargs):
  count = 0
  resultPageLen = 1
  result = None
  if 'page' not in kwargs:
    kwargs['page'] = 1
  initPage = kwargs['page']

  while resultPageLen > 0 and canLoop(loop, count):
    kwargs['page'] = initPage + count
    resultPage = getPage(**kwargs)
    resultPageLen = len(resultPage)
    count = count + 1
    if result is None:
      result = resultPage
    else:
      result = pd.concat([result, resultPage], ignore_index=True)
  
  return result

# 获取结果
def get(loop=False, **kwargs):
  if loop:
    return loopPage(loop, **kwargs)
  else:
    return getPage(**kwargs)

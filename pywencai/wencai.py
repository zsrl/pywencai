import os
import execjs
import json
import requests as rq
import pandas as pd

# 获取token
def getToken():
  with open(os.path.join(__file__, os.pardir, './hexin-v.js'), 'r') as f:
    jscontent = f.read()
  context= execjs.compile(jscontent)
  return context.call("v")

# 获取每页数据
def getPage(**kwargs):
  data = {
    'perpage': 100,
    'page': 1,
    'source': 'Ths_iwencai_Xuangu',
    **kwargs
  }
  res = rq.request(
    method='POST',
    url='http://www.iwencai.com/customized/chart/get-robot-data',
    json=data,
    headers={
      'hexin-v': getToken(),
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
    }
  )
  result = json.loads(res.text)
  list = result['data']['answer'][0]['txt'][0]['content']['components'][0]['data']['datas']
  return pd.DataFrame.from_dict(list)

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

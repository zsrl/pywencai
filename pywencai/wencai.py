import os
import execjs
import json
import requests as rq
import pandas as pd


def getToken():
  with open(os.path.join(__file__, os.pardir, './hexin-v.js'), 'r') as f:
    jscontent = f.read()
  context= execjs.compile(jscontent)
  return context.call("v")

def getWencai(**kwargs):
  data = {
    'perpage': 10000,
    'page': 1,
    'secondary_intent': 'stock',
    'iwcpro': '1',
    'source': 'Ths_iwencai_Xuangu',
    **kwargs
  }
  res = rq.request(
    method='POST',
    url='http://www.iwencai.com/unifiedwap/unified-wap/v2/result/get-robot-data',
    data=data,
    headers={
      'hexin-v': getToken(),
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'
    }
  )
  result = json.loads(res.text)
  list = result['data']['answer'][0]['txt'][0]['content']['components'][0]['data']['datas']
  return pd.DataFrame.from_dict(list)

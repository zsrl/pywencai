import json
import requests as rq
import pandas as pd
import time
import logging
import pydash as _
from pywencai.convert import convert
from pywencai.headers import headers

handler = logging.StreamHandler()
handler.setFormatter(logging.Formatter('[pywencai] %(asctime)s - %(levelname)s - %(message)s'))
logger = logging.getLogger(__name__)
logger.addHandler(handler)
logger.setLevel(logging.INFO)


def while_do(do, retry=10, sleep=0, log=False):
    count = 0
    while count < retry:
        time.sleep(sleep)
        try:
            return do()
        except:
            log and logger.warning(f'{count+1}次尝试失败')
            count += 1
    return None


def get_robot_data(**kwargs):
    '''获取condition'''
    retry = kwargs.get('retry', 10)
    sleep = kwargs.get('sleep', 0)
    question = kwargs.get('query')
    log = kwargs.get('log', False)
    query_type = kwargs.get('query_type', 'stock')
    cookie = kwargs.get('cookie', None)
    request_params = kwargs.get('request_params', {})
    data = {
        'perpage': 10,
        'page': 1,
        'source': 'Ths_iwencai_Xuangu',
        'secondary_intent': query_type,
        'question': question
    }

    count = 0
    log and logger.info(f'获取condition开始')

    def do():
        res = rq.request(
            method='POST',
            url='http://www.iwencai.com/customized/chart/get-robot-data',
            json=data,
            headers=headers(cookie),
            **request_params
        )
        params = convert(res)
        log and logger.info(f'获取get_robot_data成功')
        return params

    result = while_do(do, retry, sleep, log)

    if result is None:
        log and logger.info(f'获取get_robot_data失败')

    return result


def replace_key(key):
    '''替换key'''
    key_map = {
        'question': 'query',
        'sort_key': 'urp_sort_index',
        'sort_order': 'urp_sort_way'
    }
    return key_map.get(key, key)


def get_page(**kwargs):
    '''获取每页数据'''
    retry = kwargs.pop('retry', 10)
    sleep = kwargs.pop('sleep', 0)
    log = kwargs.pop('log', False)
    cookie = kwargs.pop('cookie', None)
    request_params = kwargs.get('request_params', {})

    data = {
        'perpage': 100,
        'page': 1,
        'source': 'Ths_iwencai_Xuangu',
        **kwargs
    }
    count = 0
    log and logger.info(f'第{data.get("page")}页开始')

    def do():
        res = rq.request(
            method='POST',
            url='http://www.iwencai.com/gateway/urp/v7/landing/getDataList',
            data=data,
            headers=headers(cookie),
            timeout=(5, 10),
            **request_params
        )
        result = json.loads(res.text)
        list = result['answer']['components'][0]['data']['datas']
        log and logger.info(f'第{data.get("page")}页成功')
        return pd.DataFrame.from_dict(list)
    
    result = while_do(do, retry, sleep, log)

    if result is None:
        log and logger.error(f'第{data.get("page")}页失败')

    return result


def can_loop(loop, count):
    '''是否继续循环'''
    if (loop is True):
        return True
    else:
        return count < loop


def loop_page(loop, **kwargs):
    '''循环分页'''
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


def get(loop=False, **kwargs):
    '''获取结果'''
    kwargs = {replace_key(key): value for key, value in kwargs.items()}
    params = get_robot_data(**kwargs)
    data = params.get('data')
    condition = data.get('condition')
    if condition is not None:
        kwargs = {**kwargs, **data}
        if loop:
            return loop_page(loop, **kwargs)
        else:
            return get_page(**kwargs)
    else:
        no_detail = kwargs.get('no_detail')
        if no_detail != True:
            return data
        else:
            return None
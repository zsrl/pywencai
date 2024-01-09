import json
from typing import List
import math

import requests as rq
import pandas as pd
import time
import logging
import pydash as _
from .convert import convert
from .headers import headers

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
    user_agent = kwargs.get('user_agent', None)
    request_params = kwargs.get('request_params', {})
    data = {
        'add_info': "{\"urp\":{\"scene\":1,\"company\":1,\"business\":1},\"contentType\":\"json\",\"searchInfo\":true}",
        'perpage': '10',
        'page': 1,
        'source': 'Ths_iwencai_Xuangu',
        'log_info': "{\"input_type\":\"click\"}",
        'secondary_intent': query_type,
        'question': question
    }

    pro = kwargs.get('pro', False)

    if pro:
        data['iwcpro'] = 1

    log and logger.info(f'获取condition开始')

    def do():
        res = rq.request(
            method='POST',
            url='http://www.iwencai.com/customized/chart/get-robot-data',
            json=data,
            headers=headers(cookie, user_agent),
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
    user_agent = kwargs.get('user_agent', None)
    find = kwargs.pop('find', None)
    query_type = kwargs.get('query_type', 'stock')
    request_params = kwargs.get('request_params', {})
    pro = kwargs.get('pro', False)
    if find is None:
        data = {
            'perpage': 100,
            'page': 1,
            'source': 'Ths_iwencai_Xuangu',
            **kwargs
        }
        target_url = 'http://www.iwencai.com/gateway/urp/v7/landing/getDataList'
        if pro:
            target_url = f'{target_url}?iwcpro=1'
        path = 'answer.components.0.data.datas'
    else:
        if isinstance(find, List):
            # 传入股票代码列表时，拼接
            find = ','.join(find)
        data = {
            'perpage': 100,
            'page': 1,
            'source': 'Ths_iwencai_Xuangu',
            'query_type': query_type,
            'question': find,
            **kwargs
        }
        target_url = 'http://www.iwencai.com/unifiedwap/unified-wap/v2/stock-pick/find'
        path = 'data.data.datas'
    
    log and logger.info(f'第{data.get("page")}页开始')

    def do():
        res = rq.request(
            method='POST',
            url=target_url,
            data=data,
            headers=headers(cookie, user_agent),
            timeout=(5, 10),
            **request_params
        )
        result_do = json.loads(res.text)
        data_list = _.get(result_do, path)

        if len(data_list) == 0:
            log and logger.error(f'第{data.get("page")}页返回空！')
            raise Exception("data_list is empty!")
        log and logger.info(f'第{data.get("page")}页成功')
        return pd.DataFrame.from_dict(data_list)
    
    result = while_do(do, retry, sleep, log)

    if result is None:
        log and logger.error(f'第{data.get("page")}页失败')

    return result


def can_loop(loop, count):
    return count < loop


def loop_page(loop, row_count, **kwargs):
    '''循环分页'''
    count = 0
    perpage = kwargs.pop('perpage', 100)
    max_page = math.ceil(row_count / perpage)
    result = None
    if 'page' not in kwargs:
        kwargs['page'] = 1
    initPage = kwargs['page']
    loop_count = max_page if loop is True else loop
    while can_loop(loop_count, count):
        kwargs['page'] = initPage + count
        resultPage = get_page(**kwargs)
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
    condition = _.get(data, 'condition')
    if condition is not None:
        kwargs = {**kwargs, **data}
        find = kwargs.get('find', None)
        if loop and find is None:
            row_count = params.get('row_count')
            return loop_page(loop, row_count, **kwargs)
        else:
            return get_page(**kwargs)
    else:
        no_detail = kwargs.get('no_detail')
        if no_detail != True:
            return data
        else:
            return None
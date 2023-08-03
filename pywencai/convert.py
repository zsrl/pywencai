import pandas as pd
import json
import pydash as _
import requests as rq
from .headers import headers

def get_url(url):
    res = rq.request(
        method='GET',
        url=f'http://www.iwencai.com{url}',
        headers=headers()
    )
    result = json.loads(res.text)
    return result.get('data')

def xuangu_tableV1_handler(comp, comps):
    '''xuangu_tableV1类型'''
    return {
        'condition': _.get(comp, 'data.meta.extra.condition'),
        'comp_id': comp['cid'],
        'uuid': comp['puuid']
    }

def common_handler(comp, comps):
    '''common类型'''
    datas = _.get(comp, 'data.datas')
    if isinstance(datas, list):
        return pd.DataFrame.from_dict(datas)
    else:
        return _.get(comp, 'data')

def container_handler(comp, comps):
    '''container类型'''
    result = {}
    for uuid in _.get(comp, 'config.children', []):
        child = _.find(comps, lambda c: c.get('uuid') == uuid)
        key = _.get(child, 'show_type')
        if key is not None and key != '':
            result[key] = show_type_handler(child, comps)
    return result

def txt_handler(comp, comps):
    '''txt类型'''
    content = _.get(comp, 'data.content')
    return content

def tab4_handler(comp, comps):
    '''tab4类型'''
    result = {}
    for tab in comp.get('tab_list'):
        tab_name = tab.get('tab_name')
        tab_list = tab.get('list')
        if tab_name is not None:
            tabResult = result[tab_name] = {}
            for tcomp in tab_list:
                show_type = tcomp.get('show_type')
                tabResult[show_type] = show_type_handler(tcomp, tab_list)
    return result

def tab1_handler(comp, comps):
    '''tab1类型'''
    result = {}
    data = comp.get('data')
    for tab in comp.get('tab_list'):
        tab_name = tab.get('tab_name')
        tab_list = tab.get('list')
        if tab_name is not None:
            tabResult = result[tab_name] = {}
            for tcomp in tab_list:
                show_type = tcomp.get('show_type')
                data_index = tcomp.get('data_index')
                tcomp.set('data', data.get(data_index))
                tabResult[show_type] = show_type_handler(tcomp, tab_list)
    return result

def dragon_tiger_stock_handler(comp, comps):
    '''龙虎榜分析'''
    result ={}
    data = _.get(comp, 'data.datas.0')
    detail = data.pop('detail', None)
    
    result['data'] = pd.DataFrame.from_dict([data])
    if detail is not None:
        result['detail'] = {
            'buy': pd.DataFrame.from_dict(_.get(detail[0], 'buy.datas')),
            'sell': pd.DataFrame.from_dict(_.get(detail[0], 'sell.datas'))
        }
    return result

def wiki1_handler(comp, comps):
    url = _.get(comp, 'data.url')
    if url is not None:
        wcomp = get_url(url)
        if wcomp is not None:
            return show_type_handler(wcomp, comps)
        else:
            return None
    return None

def textblocklinkone_handler(comp, comps):
    data = _.get(comp, 'data.result.data')
    return pd.DataFrame.from_dict(data)

def nestedblocks_handler(comp, comps):
    '''股东户数分析'''
    subBlocks = _.get(comp, 'data.result.subBlocks.0.subBlocks')
    result = []
    for sub in subBlocks:
        url = sub.get('url')
        sub_comp = get_url(url)
        if sub_comp is not None:
            result.append(show_type_handler(sub_comp, comps))
    return result




show_type_handler_dict = {
    'container': container_handler,
    'txt1': txt_handler,
    'txt2': txt_handler,
    'tab4': tab4_handler,
    'dragon_tiger_stock': dragon_tiger_stock_handler,
    'tab1': tab1_handler,
    # 'wiki1': wiki1_handler,
    'textblocklinkone': textblocklinkone_handler,
    'nestedblocks': nestedblocks_handler
}

def show_type_handler(comp, comps):
    '''处理每种不同的show_type类型'''
    show_type = comp.get('show_type')
    handler = show_type_handler_dict.get(show_type)
    if handler is not None:
        return handler(comp, comps)
    else:
        return common_handler(comp, comps)

def get_key(comp):
    '''获取每一项的key'''
    h1 = _.get(comp, 'title_config.data.h1') or _.get(comp, 'config.title') or _.get(comp, 'show_type')
    return h1

def multi_show_type_handler(components):
    '''处理多个show_type类型的数据'''
    result = {}
    for comp in components:
        key = get_key(comp)
        value = show_type_handler(comp, components)
        if key is not None and key != '' and value is not None:
            result[key] = value

    return result


def convert(res):
    '''处理get_robot_data的结果'''
    result = json.loads(res.text)
    content = _.get(result, 'data.answer.0.txt.0.content')
    if type(content) == str:
        content = json.loads(content)
    components = content['components'] 
    params = {}
    if (len(components) == 1 and _.get(components[0], 'show_type') == 'xuangu_tableV1'):
        params = {
            'data': xuangu_tableV1_handler(components[0], components),
            'row_count' : _.get(components[0], 'data.meta.extra.row_count')
        }
    else:
        params = {
            'data': multi_show_type_handler(components)
        }
    return params

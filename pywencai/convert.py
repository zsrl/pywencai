import pandas as pd
import json
import pydash as _

def xuangu_tableV1_handler(comp, comps):
    '''xuangu_tableV1类型'''
    return {
        'condition': _.get(comp, 'data.meta.extra.condition'),
        'comp_id': comp['cid'],
        'uuid': comp['puuid']
    }

def container_handler(comp, comps):
    '''container类型'''
    result = {}
    for uuid in _.get(comp, 'config.children', []):
        child = _.find(comps, lambda c: c.get('uuid') == uuid)
        key = _.get(child, 'show_type')
        if key is not None:
            result[key] = show_type_handler(child, comps)
    return result

def txt1_handler(comp, comps):
    '''txt1类型'''
    content = _.get(comp, 'data.content')
    return content


def barline3_handler(comp, comps):
    '''barline3类型'''
    datas = _.get(comp, 'data.datas')
    return pd.DataFrame.from_dict(datas)

show_type_handler_dict = {
    'xuangu_tableV1': xuangu_tableV1_handler,
    'container': container_handler,
    'txt1': txt1_handler,
    'barline3': barline3_handler,
    'tableV1': barline3_handler
}


def filter_handler(comp):
    '''过滤show_type类型'''
    if 'title_config' in comp.keys():
        return True
    return False


def show_type_handler(comp, comps):
    '''处理每种不同的show_type类型'''
    show_type = comp.get('show_type')
    handler = show_type_handler_dict.get(show_type)
    if handler is not None:
        return handler(comp, comps)
    else:
        return None

def multi_show_type_handler(components):
    '''处理多个show_type类型的数据'''
    comps = list(filter(filter_handler, components))
    result = {}
    for comp in comps:
        key = _.get(comp, 'title_config.data.h1')
        value = show_type_handler(comp, components)
        if key is not None and value is not None:
            result[key] = value

    return result


def convert_params(res):
    '''处理get_robot_data的结果'''
    result = json.loads(res.text)
    content = _.get(result, 'data.answer.0.txt.0.content')
    if type(content) == str:
        content = json.loads(content)
    components = content['components'] 
    params = {}
    if len(components) == 1:
        components0 = components[0]
        params = {
            'data': show_type_handler(components0, components)
        } 
    else:
        params = {
            'data': multi_show_type_handler(components)
        }
    return params

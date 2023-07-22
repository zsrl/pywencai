import pywencai

"""
参数
query
必填，查询问句

老版本的question参数1.0版本以后会弃用，请以后统一使用query参数

sort_key
非必填，指定用于排序的字段，值为返回结果的列名

sort_order
非必填，排序规则，至为asc（升序）或desc（降序）

page
非必填，查询的页号，默认为1

perpage
非必填，每页数据条数，默认值100，由于问财做了数据限制，最大值为100，指定大于100的数值无效。

loop
非必填，是否循环分页，返回多页合并数据。默认值为False，可以设置为True或具体数值。

当设置为True时，程序会一直循环到最后一页，返回全部数据。

当设置具体数值n时，循环请求n页，返回n页合并数据。

query_type
非必填，默认为stock，当查询的类型不是股票的时候需要传，取值如下：

取值	含义
stock	股票
zhishu	指数
fund	基金
hkstock	港股
usstock	美股
threeboard	新三板
conbond	可转债
insurance	保险
futures	期货
lccp	理财
foreign_exchange	外汇
retry
非必填，默认为10，表示请求失败后的重试次数。

sleep
非必填，默认为0，表示循环请求时，每次请求间隔多少秒。

log
非必填，默认为False，是否在控制台打印日志。

pro
非必填，默认为False，付费版传True，

必须传入cookie参数才能使用付费版

cookie
非必填，默认为None，免费版可以忽略，付费版必须传入cookie，获取付费使用权限。

pywencai.get(question='近3个月每日市盈率', pro=True, cookie='xxxx')
request_params
非必填，默认为{}，可以设置额外的request参数

pywencai.get(query='昨日涨幅', sort_order='asc', loop=True, log=True, request_params={ 'proxies': proxies, 'timeout': (5, 10) })
具体参数参看：https://requests.readthedocs.io/en/latest/api/#requests.request

no_detail
非必填，默认为False，当为True时，查询一些详情类问题不再会返回字典，而返回None，可以保证查询结果类型一直为pd.DataFrame或None。

find
非必填，默认为None，可以传一个数组，例如['600519', '000010']，数组内的对应标的会排列在DataFrame的最前面。
"""

if __name__ == '__main__':
    res = pywencai.get(query='退市股票', sort_key='退市@退市日期', sort_order='asc')
    print(res)

    # # 问指数返回dict，需要这样取
    # res = pywencai.get(query='昨日883957成交额', sort_order='asc', query_type='zhishu')
    # res = list(res.values())[0]
    print(res)

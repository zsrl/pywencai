# pywencai

获取同花顺问财数据

## 环境依赖

由于程序中执行了js代码，请先保证已安装了[Node.js](https://nodejs.org/en/)

未安装请自行安装

## 安装

```
pip install pywencai
```

# Demo

```python
import pywencai

res = pywencai.get(question='退市股票', sort_key='退市@退市日期', sort_order='asc')
print(res)
```

[demo.ipynb](./demo.ipynb)

# API

## get(**kwargs)

根据问财语句查询结果

### 参数

#### question

必填，查询问句

#### sort_key

非必填，指定用于排序的字段，值为返回结果的列名

#### sort_order

非必填，排序规则，至为`asc`（升序）或`desc`（降序）

#### page

非必填，查询的页号，默认为1

#### perpage

非必填，每页数据条数，默认值100，由于问财做了数据限制，最大值为100，指定大于100的数值无效。

#### loop

非必填，是否循环分页，返回多页合并数据。默认值为`False`，可以设置为`True`或具体数值。

当设置为`True`时，程序会一直循环到最后一页，返回全部数据。

当设置具体数值`n`时，循环请求n页，返回n页合并数据。

#### query_type

非必填，默认为`stock`，当查询的类型不是股票的时候需要传，取值如下：

| 取值 | 含义 |
|-|-|
| stock | 股票 |
| zhishu | 指数 |
| fund | 基金 |
| hkstock | 港股 |
| usstock | 美股 |

#### retry

非必填，默认为10，表示请求失败后的重试次数。

#### sleep

非必填，默认为0，表示循环请求时，每次请求间隔多少秒。

#### log

非必填，默认为Flase，是否在控制台打印日志。

### 返回值

该方法返回一个`pandas`的`Dataframe`

## 联系方式

欢迎加入QQ群，分享量化技术！

<img src="./qrcode.png" width=400>
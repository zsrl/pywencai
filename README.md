# pywencai

获取同花顺问财数据

# Demo

```python
import pywencai

res = pywencai.get(question='退市股票', sort_key='退市@退市日期', sort_order='asc')
print(res)
```
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

### 返回值

该方法返回一个`pandas`的`Dataframe`
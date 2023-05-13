import os
import execjs
from fake_useragent import UserAgent

ua = UserAgent()

def get_token():
    '''获取token'''
    with open(os.path.join(os.path.dirname(__file__), 'hexin-v.js'), 'r') as f:
        jscontent = f.read()
    context = execjs.compile(jscontent)
    return context.call("v")

def headers(cookie=None):
    return {
        'hexin-v': get_token(),
        'User-Agent': ua.random,
        'cookie': cookie
    }

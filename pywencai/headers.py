import os
import execjs

def get_token():
    '''获取token'''
    with open(os.path.join(os.path.dirname(__file__), 'hexin-v.js'), 'r') as f:
        jscontent = f.read()
    context = execjs.compile(jscontent)
    return context.call("v")

def headers(cookie=None, user_agent=None):

    if user_agent is None:
        from fake_useragent import UserAgent
        ua = UserAgent()
        user_agent = ua.random
        

    return {
        'hexin-v': get_token(),
        'User-Agent': user_agent,
        'cookie': cookie
    }

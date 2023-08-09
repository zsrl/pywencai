import os
# import execjs
import subprocess



def get_token():
    '''获取token'''
    result = subprocess.run(['node', os.path.join(os.path.dirname(__file__), 'hexin-v.bundle.js')], stdout=subprocess.PIPE)
    # with open(os.path.join(os.path.dirname(__file__), 'hexin-v.bundle.js'), 'r') as f:
    #     jscontent = f.read()
    # context = execjs.compile(jscontent)
    return result.stdout.decode().strip() # context.call("v")

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

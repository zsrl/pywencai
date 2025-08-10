import os
import time
import random
import base64
from functools import lru_cache
from fake_useragent import UserAgent


@lru_cache(maxsize=1)
def random_useragent():
    ua = UserAgent()
    return ua.random


class DeviceInfo:
    def __init__(self, user_agent=None):
        # 设备和浏览器信息
        self.random_id = self._get_random()
        self.server_time = self._get_current_time()
        self.client_time = 0        # 4字节 - 客户端时间
        user_agent = random_useragent() if user_agent is None else user_agent
        self.user_agent_hash = self._str_hash(user_agent)
        self.platform = 0           # 1字节 - 平台类型
        self.browser_index = 11     # 1字节 - 浏览器索引
        self.plugin_num = 0         # 1字节 - 插件数量

        # 用户行为数据
        self.mouse_moves = 0        # 3字节 - 鼠标移动次数
        self.mouse_clicks = 0       # 2字节 - 鼠标点击次数
        self.mouse_scrolls = 0      # 2字节 - 鼠标滚轮次数
        self.key_presses = 0        # 2字节 - 键盘按键次数
        self.mouse_x = 0            # 2字节 - 鼠标X坐标
        self.mouse_y = 0            # 2字节 - 鼠标Y坐标
        self.browser_feature = 2848 # 2字节 - 浏览器特征
        self.reserved1 = 0          # 2字节 - 保留字段1
        self.reserved2 = 0          # 4字节 - 保留字段2
        self.counter = 0            # 2字节 - 计数器
        self.version = 3            # 1字节 - 版本号

    def _get_random(self):
        """生成随机数"""
        return random.randint(0, 0xFFFFFFFF)

    def _get_current_time(self):
        """获取当前时间戳"""
        return int(time.time())

    def _str_hash(self, s):
        """字符串哈希"""
        c = 0
        for v in range(len(s)):
            c = (c << 5) - c + ord(s[v])
            c = c & 0xFFFFFFFF  # JavaScript的 >>>= 0 操作
        return c

    def update_behavior_data(self):
        """更新用户行为数据"""
        # 更新计数器
        self.counter = (self.counter + 1) & 0xFFFF

        # 更新时间戳
        self.server_time = self._get_current_time()
        self.client_time = self._get_current_time()
        self.reserved2 = 0

        # 模拟用户行为数据
        self.mouse_moves = random.randint(0, 10000)
        self.mouse_clicks = random.randint(0, 10000)
        self.mouse_scrolls = random.randint(0, 10000)
        self.key_presses = random.randint(0, 10000)
        self.mouse_x = random.randint(0, 1920)
        self.mouse_y = random.randint(0, 1080)

    def to_buffer(self):
        """将设备信息转换为字节数组 - 使用MSB first字节序（大端序）"""
        # 字段定义：(值, 字节数)
        fields = [
            (self.random_id, 4),        # 0: 随机ID
            (self.server_time, 4),      # 1: 服务器时间
            (self.client_time, 4),      # 2: 客户端时间
            (self.user_agent_hash, 4),  # 3: User-Agent哈希
            (self.platform, 1),         # 4: 平台类型
            (self.browser_index, 1),    # 5: 浏览器索引
            (self.plugin_num, 1),       # 6: 插件数量
            (self.mouse_moves, 3),      # 7: 鼠标移动次数
            (self.mouse_clicks, 2),     # 8: 鼠标点击次数
            (self.mouse_scrolls, 2),    # 9: 鼠标滚轮次数
            (self.key_presses, 2),      # 10: 键盘按键次数
            (self.mouse_x, 2),          # 11: 鼠标X坐标
            (self.mouse_y, 2),          # 12: 鼠标Y坐标
            (self.browser_feature, 2),  # 13: 浏览器特征
            (self.reserved1, 2),        # 14: 保留字段1
            (self.reserved2, 4),        # 15: 保留字段2
            (self.counter, 2),          # 16: 计数器
            (self.version, 1)           # 17: 版本号
        ]

        # 计算总缓冲区大小
        total_size = sum(size for _, size in fields)
        buffer = [0] * total_size

        # 按MSB first（大端序）填充缓冲区
        offset = 0
        for value, size in fields:
            # 将多字节值按大端序写入缓冲区
            for i in range(size):
                # MSB first: 高位字节在前
                shift = (size - 1 - i) * 8
                buffer[offset + i] = (value >> shift) & 0xFF
            offset += size

        return buffer



class TokenGenerator:
    def __init__(self, user_agent=None):
        self.device = DeviceInfo(user_agent)

    def simple_hash(self, data):
        """简单哈希函数 - 支持bytes/bytearray"""
        e = 0
        for byte_value in data:
            e = (e << 5) - e + byte_value
        return e & 255

    def update(self):
        """更新token"""
        # 更新设备行为数据
        self.device.update_behavior_data()

        # 转换为字节数组并编码
        buffer = self.device.to_buffer()

        # 编码数据
        key = self.simple_hash(buffer)
        dst = bytearray([3, key])

        for byte_value in buffer:
            dst.append(byte_value ^ (key & 255))
            key = ~(key * 131) & 0xFFFFFFFF

        return base64.urlsafe_b64encode(dst).decode()


@lru_cache(maxsize=1)
def get_token_generator(user_agent=None):
    return TokenGenerator(user_agent)


def get_token(user_agent):
    '''获取token'''
    return get_token_generator(user_agent).update()


def headers(cookie=None, user_agent=None):
    if user_agent is None:
        user_agent = random_useragent()
    return {
        'hexin-v': get_token(user_agent),
        'User-Agent': user_agent,
        'cookie': cookie
    }


if __name__ == '__main__':
    print(get_token(None))
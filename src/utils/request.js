import Taro from '@tarojs/taro'
import Common from "./Common";

/**
 * 保存token
 * @param token
 */
export function saveToken(token) {
  if (!Common.isEmpty(token)) {
    Taro.setStorageSync('token', token);
  }
}

/**
 * 获取token
 * @return {string}
 */
export function getToken() {
  return Common.initValue(Taro.getStorageSync('token'), '');
}

/**
 * 请求通用参数
 */
const CommonParams = {
  system: 'mch',
};

/**
 * 网络请求
 * @param url
 * @param data
 * @param method
 */
export default function request(url, data, method = 'POST') {
  url = 'https://www.guziwork.com' + url;
  let newData = {...CommonParams,...data};
  let apptoken=Taro.getStorageSync("appToken");
  let headers = { 'Authorization':  'Bearer ' + apptoken};
  if (method === 'POST') {
    headers['content-type'] = 'application/x-www-form-urlencoded';//post 才需要encoding
  } if (method === 'GET') {

  }

  return Taro.request({
    url: url, data: newData, method: method,
    header: headers,
    dataType: 'json',
  }).then(res => {
    if (res.statusCode !== 200) {
      throw res.errMsg;
    }
    return res.data;
  })
}

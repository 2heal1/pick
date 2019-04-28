import Taro from '@tarojs/taro'

export default {

  /**
   * 是否为空
   * @param val
   * @return {boolean}
   */
  isEmpty: val => {
    return val === null || val === '' || val === undefined;
  },


  /**
   * 构建图片地址
   * @param url
   * @return {*}
   */
  buildImageUrl: (url) => {
    if (url === null || url === '' || url === undefined) {
      // 显示默认logo图片
      return 'http://www.minsukeclub.com/';
    }
    if (url.substr(0, 4) === 'http') {
      return url;
    } else {
      return 'http://www.minsukeclub.com/' + url;
    }
  },

  /**
   * 初始化对象
   * @param obj
   * @param def
   * @returns {*}
   */
  initValue: (obj, def) => {
    if (obj === '' || obj === null || obj === undefined) {
      return def;
    } else {
      return obj;
    }
  },


  /**
   * 显示网络的错误提示
   * @param res
   */
  showRespError: (res) => {
    if (res.code!==200) {
      if (res.code === 401) {
        Taro.navigateTo({url: '/pages/loginorreg/loginorReg'});
      } else {
        Taro.showToast({title: String(res.message), icon: 'none'});
      }
    }
  },


  /**
   * 获取Url中的参数
   */
  getParamFormUrl: (key, host) => {
    let arr;
    let reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)');
    try {
      let testHost = window.location.href;
      if (host) {
        testHost = host;
      }
      if ((arr = testHost.split('?')[1].match(reg))) {
        return decodeURI(arr[2]);
      }
    } catch (e) {
    }
    return '';
  },

}

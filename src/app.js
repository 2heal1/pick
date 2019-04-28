import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/index/recommendDetail',
      'pages/pickColor/pickColor',
      'pages/pickColor/chooseColor',
      'pages/pickColor/colorDetail',
      'pages/user/user',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
    },
    tabBar: {
      color: '#bfbfbf',
      selectedColor: '#0366d6',
      borderStyle: 'black',
      position: 'bottom',
      backgroundColor: '#ffffff',
      list: [
        {
          pagePath: 'pages/index/index',
          iconPath: 'assests/imgs/ic_recommend.png',
          selectedIconPath: 'assests/imgs/ic_recommend_h.png',
          text: '推荐'
        },
        {
          pagePath: 'pages/pickColor/pickColor',
          iconPath: 'assests/imgs/ic_pick.png',
          selectedIconPath: 'assests/imgs/ic_pick_h.png',
          text: '拾色'
        },
        {
          pagePath: 'pages/user/user',
          iconPath: 'assests/imgs/ic_personal.png',
          selectedIconPath: 'assests/imgs/ic_personal_h.png',
          text: '个人'
        }
      ]
    },
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))

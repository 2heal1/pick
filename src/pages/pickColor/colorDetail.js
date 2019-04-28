import Taro, { Component } from '@tarojs/taro'
import { View, Text ,Image } from '@tarojs/components'
import { AtButton  } from 'taro-ui'
import './colorDetail.scss'

export default class colorDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  config = {
    navigationBarTitleText: 'colorDetail',
    navigationStyle:'custom'
  }

  componentWillMount () {
    // if(Taro.getStorageSync('img1')===1){
    //
    // }else {
    //   this.setState({
    //     imgUrl:Taro.getStorageInfoSync('img1')
    //   })
    // }

  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  //函数方法

  render () {
    return (
      <View className='colorDetailItem'>
        colorDetail
      </View>
    )
  }
}

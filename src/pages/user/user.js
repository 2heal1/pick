import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './user.scss'

export default class user extends Component {

  config = {
    navigationBarTitleText: '个人'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>
        <Text>user</Text>
      </View>
    )
  }
}

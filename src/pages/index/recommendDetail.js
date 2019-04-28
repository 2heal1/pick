import Taro, { Component } from '@tarojs/taro'
import {View, Image,ScrollView} from '@tarojs/components'
import {  AtIcon ,AtAvatar ,AtButton} from 'taro-ui'
import './recommendDetail.scss'
import pic2 from '../../assests/imgs/pic2.png'
import CommonBar from '../../components/comment-bar/index'
import IndexComponent from './index'

const res = Taro.getSystemInfoSync()

export default class recommendDetail extends Component {
  config = {
    navigationBarTitleText: '详情',
    navigationStyle:'custom',
    navigationBarBackgroundColor:'#000000',
    backgroundColor:'#000000'
  }
  constructor(props){
    super(props)
    this.state = {
      isScroll:false,
      value: ''
    }
  }
  componentWillMount () {
    this.clicked=0;
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  // 渲染方法
  goBack(){
    Taro.navigateBack({ delta: 1 })
  }
  showNavigation(e){
    if(e.detail.scrollTop<30){
      this.setState({
        isScroll:false
      })
    }else {
      this.setState({
        isScroll:true
      })
    }
  }
  onChange (value) {
    this.setState({
      value: value
    })
  }
  onActionClick () {
    console.log('开始搜索')
  }
  hideNavigation(){
    this.setState({
      isScroll:false
    })
  }
  render () {
    return (
      <View className='indexDetailItem linearVer'>
        <ScrollView
          className='scrollview'
          scrollY
          scrollWithAnimation
          scrollTop='0'
          enableBackToTop
          style='height: 100vh;'
          lowerThreshold='20'
          upperThreshold='20'
          onScrollToUpper={this.hideNavigation}
          onScroll={this.showNavigation.bind(this)}
        >
          <View className='flexShrink'>
            <View className='flexShrink'>
              <Image src={pic2} className='imgSize' />
            </View>
            <View className='flexShrink titleOne txtColorTwo marginBottom'>绚丽时尚几何渐变图形国外海报</View>
            {/*点赞 时间 评论*/}
            <View className='flexShrink linearHor flexVerCenter viewWidth marginBottom'>
              <View className='flexShrink marginLeftOne linearHor viewWidthTwo'>
                <View className='flexShrink'><AtIcon value='clock' size='20' color='dimgray'></AtIcon></View>
                <View className='flexShrink txtDimGray marginLeftTwo'>2019/12/23</View>
              </View>
              <View className='flexShrink marginLeftOne linearHor viewWidthTwo'>
                <View className='flexShrink'><AtIcon value='heart-2' size='20' color='dimgray'></AtIcon></View>
                <View className='flexShrink txtDimGray marginLeftTwo'>203</View>
              </View>
              <View className='flexShrink marginLeftOne linearHor viewWidthTwo'>
                <View className='flexShrink'><AtIcon value='message' size='20' color='dimgray'></AtIcon></View>
                <View className='flexShrink txtDimGray marginLeftTwo'>203</View>
              </View>
            </View>
            {/*人物信息*/}
            <View className='flexShrink linearHor marginLeftOne viewBetween marginBottom'>
              <View className='flexShrink linearHor'>
                <View className='flexShrink'><AtAvatar circle size='small' text='乐'></AtAvatar></View>
                <View className='flexShrink linearVer flexStart marginLeftOne'>
                  <View className='flexShrink txtNormal'>summer happy</View>
                  <View className='flexShrink txtLeft txtDimGray'>渐变背景素材</View>
                </View>
              </View>
              <View>
                <AtButton type='primary'>分享</AtButton>
              </View>

            </View>
            {/*评论*/}
            <View className='flexShrink marginBottom'>
              <CommonBar
                actionName='评论'
                value={this.state.value}
                onChange={this.onChange.bind(this)}
                onActionClick={this.onActionClick.bind(this)}
                placeholder='来评论几句吧！'
              />
            </View>
            {/*收藏*/}
            <View className='flexShrink viewWidth bgColorOne marginBottom'>
              <View className='flexShrink titleOne titleTwo marginBottom'>推荐收藏</View>
              <IndexComponent />
            </View>
            <View className='flexShrink marginBottomTwo'>
              <AtButton type='secondary'>采集</AtButton>
            </View>
            {/*顶部导航*/}
            <View className={this.state.isScroll ? 'flexShrink navigationOne linearHor viewEnd' : 'hiddenView flexShrink'} style={{paddingTop:res.statusBarHeight}}>
              <View className='marginBottomOne flexShrink'onClick={this.goBack}>
                <AtIcon value='chevron-left' size='20' color='white'></AtIcon>
              </View>
              <View className='txtColorOne flexShrink'>详情</View>
            </View>
          </View>
        </ScrollView>
      </View>
  )
  }
}

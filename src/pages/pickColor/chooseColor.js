import Taro, { Component } from '@tarojs/taro'
import { View, Text ,Image } from '@tarojs/components'
import { AtButton , AtNavBar } from 'taro-ui'
import './chooseColor.scss'

export default class chooseColor extends Component {
  constructor(props){
    super(props)
    this.state = {
      imgUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2547267903,2935197135&fm=27&gp=0.jpg',
      imgWidth:100,
    }
  }
  config = {
    navigationBarTitleText: 'chooseColor',
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
  getBigWidth(){
    this.setState({
      imgWidth:parseInt(this.state.imgWidth)+10
    })
  }
  getSmallWidth(){
    this.setState({
      imgWidth:parseInt(this.state.imgWidth)-10
    })
  }
  switchToPickColor(e){
    Taro.navigateTo({
      url:'/pages/pickColor/'+e
    })
  }
  render () {
    return (
      <View className='chooseColorItem'>
        <View className='flexShrink'>
          <Image src={this.state.imgUrl} className='imgSize' style={{width:this.state.imgWidth+'%'}} />
        </View>
        <View className='flexShrink linearHor viewBetween'>
          <AtButton type='secondary' onClick={this.getSmallWidth.bind(this)}>缩小</AtButton>
          <AtButton type='primary' onClick={()=>this.switchToPickColor('colorDetail')}>采集</AtButton>
          <AtButton type='secondary' onClick={this.getBigWidth.bind(this)}>放大</AtButton>
        </View>
        <AtNavBar
          onClickRgIconSt={this.handleClick}
          onClickRgIconNd={this.handleClick}
          onClickLeftIcon={this.handleClick}
          color='#000'
          fixed
          title={this.state.imgWidth+'%'}
          leftText='返回'
          rightFirstIconType='bullet-list'
          rightSecondIconType='user'
        />
      </View>
    )
  }
}

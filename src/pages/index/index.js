import Taro, { Component } from '@tarojs/taro'
import {View, Image,} from '@tarojs/components'
import { AtIcon  , AtAvatar  } from 'taro-ui'
import './index.scss'
import pic1 from '../../assests/imgs/pic1.png'
import pic2 from '../../assests/imgs/pic2.png'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  constructor(props){
    super(props)
    this.state = {
      pageX:'50px',
      pageY:'50px',
      isShow:'none',
      isFav:false,
      rippleStyle:''
    }
  }
  componentWillMount () {
    this.clicked=0;
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  swichToIndex(e){
    Taro.navigateTo({
      url:'/pages/index/'+e
    })
  }
  containerTap (res) {
    var that = this
    var x = res.detail.x;
    var y = res.detail.y - 40;
    this.setState({
      rippleStyle: ''
    });
    setTimeout(function () {
      that.setState({
        rippleStyle: 'top:' + y + 'px;left:' + x + 'px;-webkit-animation: ripple 0.3s  linear;animation:ripple 0.3s  linear;',
        isFav:true
      });
    },200)
  }
  onFav(e){
    e.stopPropagation();
    this.setState({
      isFav:!this.state.isFav,
      isShow:'none'
    },()=>{
      Taro.showToast({
        title: 'succeed !',
        icon: 'success',
        duration: 2000
      })
        .then(res => console.log(res))
    })
  }
  onDoubleClicke(e){
    this.clicked=this.clicked+1;
    if(this.clicked===2){
      this.containerTap(e);
      this.clicked=0;
    }
  }

  render () {

    return (
      <View className='indexItem linearVer'>
        {/*<View className='container' onLongPress={this.containerTap.bind(this)}>sssss</View>*/}
        <View className='flexGrow flexWrap linearHor'>
          {/*part1*/}
          <View className='flexShrink linearVer viewWidthOne'>
            <View className='flexShrink viewWidthTwo'>
              <View className='flexShrink'><Image className='image imgWidth' mode='widthFix' src={pic2} /></View>
              <View className='flexShrink txtLeft marginBottomOne'>绚丽时尚几何渐变图形国外海报</View>
              <View className='flexShrink linearHor marginBottomOne'>
                <View className='flexShrink flexVerCenter linearHor'>
                  <AtIcon value='clock' size='20' color='dimgray'></AtIcon>
                  <View className='flexShrink txtSizeOne txtDimGray'>2019/12/13</View>
                </View>
                <View className='flexShrink flexVerCenter linearHor marginLeftTwo'>
                  <AtIcon value='heart-2' size='20' color='dimgray'></AtIcon>
                  <View className='flexShrink txtSizeOne txtDimGray'>203</View>
                </View>
              </View>
              <View className='flexShrink linearHor'>
                <View className='flexShrink'><AtAvatar circle size='small' text='乐'></AtAvatar></View>
                <View className='flexShrink linearVer flexStart marginLeftOne'>
                  <View className='flexShrink txtNormal'>summer happy</View>
                  <View className='flexShrink txtLeft txtDimGray'>渐变背景素材</View>
                </View>
              </View>
            </View>
            <View className='flexShrink viewWidthTwo'>
              <View
                className='flexShrink'
                hoverClass='imgWidthTwo'
                onLongPress={this.containerTap.bind(this)}
                onTouchMove={this.onTouchM.bind(this)}
                onClick={this.onDoubleClicke.bind(this)}
              >
                <Image className='image imgWidth' mode='widthFix' src={pic1} />
              </View>
              <View className='flexShrink txtLeft marginBottomOne'>绚丽时尚几何渐变图形国外海报s</View>
              <View className='flexShrink linearHor marginBottomOne'>
                <View className='flexShrink flexVerCenter linearHor'>
                  <AtIcon value='clock' size='20' color='dimgray'></AtIcon>
                  <View className='flexShrink txtSizeOne txtDimGray'>2019/12/13</View>
                </View>
                <View className='flexShrink flexVerCenter linearHor marginLeftTwo' onClick={this.onFav.bind(this)}>
                  <AtIcon value='heart-2' size='20' color={this.state.isFav  ? 'red' : 'dimgray'}></AtIcon>
                  <View className='flexShrink txtSizeOne txtDimGray'>203</View>
                </View>
              </View>
              <View className='flexShrink linearHor'>
                <View className='flexShrink'><AtAvatar circle size='small' text='乐'></AtAvatar></View>
                <View className='flexShrink linearVer flexStart marginLeftOne'>
                  <View className='flexShrink txtNormal'>summer happy</View>
                  <View className='flexShrink txtLeft txtDimGray'>渐变背景素材</View>
                </View>
              </View>
            </View>
          </View>
          {/*part2*/}
          <View className='flexShrink linearVer viewWidthOne'>
            <View className='flexShrink viewWidthTwo' onClick={()=>this.swichToIndex('recommendDetail')}>
              <View className='flexShrink'><Image className='image imgWidth' mode='widthFix' src={pic1} /></View>
              <View className='flexShrink txtLeft marginBottomOne'>绚丽时尚几何渐变图形国外海报</View>
              <View className='flexShrink linearHor marginBottomOne'>
                <View className='flexShrink flexVerCenter linearHor'>
                  <AtIcon value='clock' size='20' color='dimgray'></AtIcon>
                  <View className='flexShrink txtSizeOne txtDimGray'>2019/12/13</View>
                </View>
                <View className='flexShrink flexVerCenter linearHor marginLeftTwo'>
                  <AtIcon value='heart-2' size='20' color='dimgray'></AtIcon>
                  <View className='flexShrink txtSizeOne txtDimGray'>203</View>
                </View>
              </View>
              <View className='flexShrink linearHor'>
                <View className='flexShrink'><AtAvatar circle size='small' text='乐'></AtAvatar></View>
                <View className='flexShrink linearVer flexStart marginLeftOne'>
                  <View className='flexShrink txtNormal'>summer happy</View>
                  <View className='flexShrink txtLeft txtDimGray'>渐变背景素材</View>
                </View>
              </View>
            </View>
            <View className='flexShrink viewWidthTwo'>
              <View className='flexShrink'><Image className='image imgWidth' mode='widthFix' src={pic2} /></View>
              <View className='flexShrink txtLeft marginBottomOne'>绚丽时尚几何渐变图形国外海报</View>
              <View className='flexShrink linearHor marginBottomOne'>
                <View className='flexShrink flexVerCenter linearHor'>
                  <AtIcon value='clock' size='20' color='dimgray'></AtIcon>
                  <View className='flexShrink txtSizeOne txtDimGray'>2019/12/13</View>
                </View>
                <View className='flexShrink flexVerCenter linearHor marginLeftTwo'>
                  <AtIcon value='heart-2' size='20' color='dimgray'></AtIcon>
                  <View className='flexShrink txtSizeOne txtDimGray'>203</View>
                </View>
              </View>
              <View className='flexShrink linearHor'>
                <View className='flexShrink'><AtAvatar circle size='small' text='乐'></AtAvatar></View>
                <View className='flexShrink linearVer flexStart marginLeftOne'>
                  <View className='flexShrink txtNormal'>summer happy</View>
                  <View className='flexShrink txtLeft txtDimGray'>渐变背景素材</View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          className='flexShrink ripple'
          style={this.state.rippleStyle}
        >
          <AtIcon value='heart-2' size='20'  color='red'></AtIcon>
        </View>

      </View>
    )
  }
}

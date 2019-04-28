import Taro, { Component } from '@tarojs/taro'
import { View, Text ,Image } from '@tarojs/components'
import { AtButton , AtImagePicker } from 'taro-ui'
import './pickColor.scss'

export default class pickColor extends Component {
  constructor(props){
    super(props)
    this.state = {
      tempFilePaths:'',
      isShowBtn:false,
      files: [{
        url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2547267903,2935197135&fm=27&gp=0.jpg',
      }]
    }
  }
  config = {
    navigationBarTitleText: '拾色',
  }

  componentWillMount () { }

  componentDidMount () {
    // Taro.setStorageSync('img1',1);
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  //函数方法
  onChange (files,operationType) {
    console.log(files);
    console.log(operationType);
    if(operationType==="remove"){
      this.setState({
        files,
        isShowBtn:true
      })
    }else {
      // Taro.setStorageSync('img1',files[0].url);
      this.setState({
        files,
        isShowBtn:false
      })
    }
  }
  onFail (mes) {
    console.log(mes)
  }
  onImageClick (index, file) {
    console.log(index, file)
  }
  switchToPickColor(e){
    Taro.navigateTo({
      url:'/pages/pickColor/'+e
    })
  }
  previewImg(index,file){
    console.log(index);
    console.log(file);
    Taro.previewImage({
      current: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2547267903,2935197135&fm=27&gp=0.jpg', // 当前显示图片的http链接
      urls: ['https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2547267903,2935197135&fm=27&gp=0.jpg'] // 需要预览的图片http链接列表
    })
  }
  testA(){
    Taro.uploadFile({
      url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
      filePath: this.state.files[0].url,
      name: 'file',
      formData: {
        user: 'test'
      },
      success(res) {
        const data = res.data
        console.log(data);
        // do something
      }
    })
  }
  render () {
    return (
      <View className='pickColorItem'>
        <View className='flexShrink marginBottom'>
          <AtImagePicker
            files={this.state.files}
            onChange={this.onChange.bind(this)}
            multiple={false}
            count={1}
            onImageClick={this.previewImg.bind(this)}
            length={1}
            showAddBtn={this.state.isShowBtn}
          />
        </View>
        <View className='flexShrink marginBottomTwo' onClick={()=>this.switchToPickColor('chooseColor')}>
          <AtButton type='secondary'>采集</AtButton>
        </View>
      </View>
    )
  }
}

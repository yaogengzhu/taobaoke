import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import { AtNoticebar } from 'taro-ui'

const fetch = require('../../api/index')
// import crypto from 'crypto'
import crypto from 'crypto-js'

import './home.scss'

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() {
    console.log(crypto)
    fetch.jsonRPC({
      url:'/goods/get-goods-list',
      data: {
        // pageId: 1
      }
    }).then(res => {
      console.log(res)
    })
   }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View>
        <View className='lunbotu'>
          <Swiper
            className='test-h'
            indicatorColor='#333'
            indicatorActiveColor='#1296db'
            circular
            indicatorDots
            autoplay>
            <SwiperItem>
              <View className='demo-text'>
                <Image src='https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg' className='imgSrc'></Image>
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text'>
                <Image src='https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg' className='imgSrc'></Image>
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text'>
                <Image src='https://gw.alicdn.com/imgextra/i2/78/O1CN019lSGp71CRlRdIPVMB_!!78-0-lubanu.jpg' className='imgSrc'></Image>
              </View>
            </SwiperItem>
          </Swiper>
        </View>
        <View>
          <AtNoticebar
          marquee={true}
          single={true}
          speed={100}
          >
            <Text className='tip'>特别通知：小程序正在开发中</Text>
          </AtNoticebar>
        </View>
      </View>
    )
  }
}

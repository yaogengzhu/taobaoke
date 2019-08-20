import Taro, { Component, Config, navigateTo } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import { AtNoticebar } from 'taro-ui'

const fetch = require('../../api/index')


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
    fetch.jsonRPC({
      url:'/2/get_man_clothing',
      data: {
        'page_no': 2
      }
    }).then(res => {
      console.log(res)
    })
   }

  
  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  // method


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
        {/* 八功格 */}
        <View className='block1'>
          <View className='list'>
            <Image src='' className='srcImg'></Image>
            男装
          </View>
          <View className='list'>
            <Image src='' className='srcImg'></Image>
            内衣
          </View>
          <View className='list'>
            <Image src='' className='srcImg'></Image>
            运动用品
          </View>
          <View className='list'>
            <Image src='' className='srcImg'></Image>
            美妆
          </View>
          <View className='list'>
            <Image src='' className='srcImg'></Image>
            数码家电
          </View>
          <View className='list'>
            <Image src='' className='srcImg'></Image>
            女装
          </View>
          <View className='list'>
            <Image src='' className='srcImg'></Image>
            食品
          </View>
          <View className='list'>
            <Image src='' className='srcImg'></Image>
            鞋包配饰
          </View>
        </View>
      </View>
 
    )
  }
}

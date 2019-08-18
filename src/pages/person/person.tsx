import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import daiFuKuan from '../../../src/assets/images/daifukuan.png'
import  daiFaHuo from '../../../src/assets/images/daifahuo.png'
import  daiShouHuo from '../../../src/assets/images/daishouhuofuben.png'
import tuiHuo from '../../../src/assets/images/icon5.png'
import order from '../../../src/assets/images/order.png'
import car from '../../../src/assets/images/car.png'
import local from '../../../src/assets/images/local.png'
import phone from '../../../src/assets/images/phone.png'


import './person.scss'
import "taro-ui/dist/style/components/icon.scss"
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

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='person'>
        {/* 顶部 */}
        <View className='bg'></View>
        <View className='menu'>
          <View className='top'>
            <View className='left'>我的订单</View>
            <View className='right'>
              查看全部订单
               <View className='at-icon at-icon-chevron-right icon'></View>
            </View>
          </View>
          <View className='center'>
            <View className='center-list'>
              <Image src={daiFuKuan} className='img'></Image>
              待付款
              </View>
            <View className='center-list'>
              <Image src={daiFaHuo} className='img'></Image>
              待发货</View>
            <View className='center-list'>
              <Image src={daiShouHuo} className='img'></Image>
              待收货</View>
            <View className='center-list'>
              <Image src={tuiHuo} className='img'></Image>
              退换货</View>
          </View>
        </View>
        <View className='list'>
          <View className='list-li'>
            <View className='left'>
              <Image src={order} className='img'></Image>
              历史订单
            </View>
            <View className='right'>
            <View className='at-icon at-icon-chevron-right icon'></View>
            </View>
          </View>
          <View className='list-li'>
            <View className='left'>
              <Image src={car} className='img'></Image>
              购物车
            </View>
            <View className='right'>
            <View className='at-icon at-icon-chevron-right icon'></View>
            </View>
          </View>
          <View className='list-li'>
            <View className='left'>
              <Image src={local} className='img'></Image>
              地址管理
            </View>
            <View className='right'>
            <View className='at-icon at-icon-chevron-right icon'></View>
            </View>
          </View>
          <View className='list-li last'>
            <View className='left'>
              <Image src={phone} className='img'></Image>
              服务热线
            </View>
            <View className='right '>
            <View className='at-icon at-icon-chevron-right icon'></View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

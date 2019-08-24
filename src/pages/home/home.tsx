import Taro, { Component, Config, navigateTo } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import { AtNoticebar } from 'taro-ui'

const fetch = require('../../api/index')

// 引入图片
import bag from '../../assets/images/bag.png'
import food from '../../assets/images/food.png'
import man from '../../assets/images/man.png'
import women from '../../assets/images/women.png'
import meiz from '../../assets/images/meiz.png'
import shuama from '../../assets/images/shuma.png'
import sport from '../../assets/images/sport.png'
import neiyi from '../../assets/images/neiyi.png'
import './home.scss'

interface IProps {

}
interface IState {
  goodsList: Array<any>,
  page: number
}

export default class Home extends Component<IProps, IState> {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页',
    enablePullDownRefresh: false, // 开启下拉刷新
  }

  // 定义一些不需要渲染的数据
  constructor() {
    super(...arguments)
    this.state = {
      goodsList: [],//  存放获取回来的数据
      page: 1, // 页数默认是1
    }
  }




  componentWillMount() {
    // 调用函数
    this.getHotGoods()
  }


  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  // 下拉触底事件
  onReachBottom() {
    this.setState({
      page: this.state.page + 1
    }, () => {
      this.getHotGoods()
    })
  }

  // method
  getHotGoods() {
    fetch.jsonRPC({
      url: '/2/get_hot',
      data: {
        'platform': 2, // 无线
        'page_size': 20, // 每一页条数
        'page_no': this.state.page,
      }
    }).then(res => {
      if (this.state.page === 1) {
        this.setState({
          goodsList: res.data.uatm_tbk_item
        })
      } else {
        this.setState({
          goodsList: this.state.goodsList.concat(res.data.uatm_tbk_item)
        })
      }
    })
  }

  // 跳转函数 
  jumpTopage(type) {
    switch(type) {
      case 'man' :
        Taro.navigateTo({
          url: '/pages/man/man'
        })
        break
    }
  }

  // render函数 
  renderNav() {
    return (
      <View className='block1'>
        <View className='list' hover-class='hover-bg' onClick={() => this.jumpTopage('man')}>
          <Image src={man} className='srcImg'></Image>
          男装
      </View>
        <View className='list' hover-class='hover-bg'>
          <Image src={neiyi} className='srcImg'></Image>
          内衣
      </View>
        <View className='list' hover-class='hover-bg'>
          <Image src={sport} className='srcImg' ></Image>
          运动用品
      </View>
        <View className='list' hover-class='hover-bg'>
          <Image src={meiz} className='srcImg'></Image>
          美妆
      </View>
        <View className='list' hover-class='hover-bg'>
          <Image src={shuama} className='srcImg'></Image>
          数码家电
      </View>
        <View className='list' hover-class='hover-bg'>
          <Image src={women} className='srcImg'></Image>
          女装
      </View>
        <View className='list' hover-class='hover-bg'>
          <Image src={food} className='srcImg'></Image>
          食品
      </View>
        <View className='list' hover-class='hover-bg'>
          <Image src={bag} className='srcImg'></Image>
          鞋包配饰
      </View>
      </View>

    )
  }


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
        {this.renderNav()}

        {/* 热搜榜推荐 */}
        <View className='hot'>热<Text className='line'>/</Text>搜<Text className='line'>/</Text>榜<Text className='line'>/</Text>推<Text className='line'>/</Text>荐</View>
        {/* top200 渲染 */}
        {this.state.goodsList.map((item) => {
          return (
            <View className='goodsBox' key={item.num_iid}>
              <View className='left'>
                <Image src={item.pict_url} className='imgSrc'></Image>
              </View>
              <View className='right'>
                <View className='title'>{item.title}</View>
                <View className='price'>
                  <View className='oldPrice'>¥{item.reserve_price}</View>
                  <View className='newPrice'>¥{item.zk_final_price}</View>
                </View>
                <View className='bottom'>
                  <View>{item.nick}</View>
                  <View>{item.volume}人付款</View>
                  <View>{item.provcity}</View>
                </View>
              </View>
            </View>
          )
        })}
      </View>


    )
  }
}

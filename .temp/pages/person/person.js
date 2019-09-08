import Nerv from "nervjs";
import Taro, { Component } from "@tarojs/taro-h5";
import { View, Image } from '@tarojs/components';
import daiFuKuan from '../../../src/assets/images/daifukuan.png';
import daiFaHuo from '../../../src/assets/images/daifahuo.png';
import daiShouHuo from '../../../src/assets/images/daishouhuofuben.png';
import tuiHuo from '../../../src/assets/images/icon5.png';
import order from '../../../src/assets/images/order.png';
import car from '../../../src/assets/images/car.png';
import local from '../../../src/assets/images/local.png';
import phone from '../../../src/assets/images/phone.png';
import './person.scss';
import "taro-ui/dist/style/components/icon.scss";
export default class Index extends Component {
  // 构造函数 
  constructor() {
    super(...arguments);
    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */

    // 设置状态值 
    this.state = {
      userInfo: {},
      user: {}
    };
  }
  componentWillMount() {
    // 调用获取用户信息的界面
    this.getUser();
  }
  componentDidMount() {
    this.getMsg();
    this.getUser();
  }
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  // method
  getUser() {
    Taro.getUserInfo().then(res => {
      // console.log(res)
      this.setState({
        userInfo: res.userInfo
      });
    });
  }
  getMsg() {
    this.setState({
      user: {
        nickname: 'Victor',
        avatar: 'https://wx.qlogo.cn/mmopen/vi_32/boS3icoNzmn9k5nCdeTjloVDP6EQ871E0Rt11egbR8aNk9Eer9zvxcw1Uq9H631qhBdge8asUGRuZUOnzngS1Ug/132'
      }
    });
  }
  render() {
    return <View className="person">
        
        <View className="bg">
          <View className="bg-box">
            <View className="block1">
              <View className="left">
                <Image src={this.state.user.avatar} className="avatarImg"></Image>
              </View>
              <View className="right">
                <View className="nickname">{this.state.user.nickname}</View>
                <View className="time">上一次登录时间</View>
              </View>
            </View>
            <View className="block2">
              <View className="li">
                <View className="jf">2000</View>
                <View className="record">我的积分</View>
              </View>
              <View className="li">
                <View className="jf">200</View>
                <View className="record">我的收藏</View>
              </View>
              <View className="li">
                <View className="jf">39</View>
                <View className="record">关注店铺</View>
              </View>
              <View className="li">
                <View className="jf">410</View>
                <View className="record">我的浏览</View>
              </View>
            </View>
          </View>
        </View>
        <View className="menu">
          <View className="top">
            <View className="left">我的订单</View>
            <View className="right">
              查看全部订单
               <View className="at-icon at-icon-chevron-right icon"></View>
            </View>
          </View>
          <View className="center">
            <View className="center-list">
              <Image src={daiFuKuan} className="img"></Image>
              待付款
              </View>
            <View className="center-list">
              <Image src={daiFaHuo} className="img"></Image>
              待发货</View>
            <View className="center-list">
              <Image src={daiShouHuo} className="img"></Image>
              待收货</View>
            <View className="center-list">
              <Image src={tuiHuo} className="img"></Image>
              退换货</View>
          </View>
        </View>
        <View className="list">
          <View className="list-li">
            <View className="left">
              <Image src={order} className="img"></Image>
              历史订单
            </View>
            <View className="right">
              <View className="at-icon at-icon-chevron-right icon"></View>
            </View>
          </View>
          <View className="list-li">
            <View className="left">
              <Image src={car} className="img"></Image>
              购物车
            </View>
            <View className="right">
              <View className="at-icon at-icon-chevron-right icon"></View>
            </View>
          </View>
          <View className="list-li">
            <View className="left">
              <Image src={local} className="img"></Image>
              地址管理
            </View>
            <View className="right">
              <View className="at-icon at-icon-chevron-right icon"></View>
            </View>
          </View>
          <View className="list-li last">
            <View className="left">
              <Image src={phone} className="img"></Image>
              服务热线
            </View>
            <View className="right ">
              <View className="at-icon at-icon-chevron-right icon"></View>
            </View>
          </View>
        </View>
      </View>;
  }
  config = {
    navigationBarTitleText: '个人中心'
  };
}
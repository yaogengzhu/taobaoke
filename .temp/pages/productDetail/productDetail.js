import Nerv from "nervjs";
import { Component } from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
export default class ProductDetail extends Component {
  constructor() {
    super(...arguments);
    // 页面基本配置 

    this.state = {
      goodsInfo: {}
    };
  }
  componentDidMount() {
    // 
    let goodsInfo = this.$router.params.goodsInfo;
    this.setState({
      goodsInfo: goodsInfo
    });
  }
  render() {
    return <View> hello </View>;
  }
  config = {
    navigationBarTitleText: '宝贝详情'
  };

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}
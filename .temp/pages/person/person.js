import Nerv from "nervjs";
import { Component } from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
// import './pserson.scss'
export default class Index extends Component {
  constructor() {
    super(...arguments);
    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
  }
  componentWillMount() {}
  componentDidMount() {}
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  render() {
    return <View className="person">
        <View>
          个人中心
        </View>
      </View>;
  }
  config = {
    navigationBarTitleText: '首页'
  };
}
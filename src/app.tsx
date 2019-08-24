import Taro, { Component, Config } from '@tarojs/taro'
import Home from './pages/home/home'

// 全局引入taro-ui样式
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/home/home',
      'pages/person/person',
      'pages/man/man',
      'pages/bag/bag',
      'pages/food/food',
      'pages/meiz/meiz',
      'pages/neiyi/neiyi',
      'pages/shuma/shuma',
      'pages/sport/sport',
      'pages/women/women'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    "tabBar": {
      "list": [
        {
          "pagePath": "pages/home/home",
          "text": "首页",
          'iconPath': './assets/images/home.png',
          'selectedIconPath': './assets/images/home1.png',
        },
        {
          "pagePath": "pages/person/person",
          "text": "会员中心",
          'iconPath': './assets/images/Person.png',
          'selectedIconPath': './assets/images/Person1.png'
        }
      ],
      'selectedColor': '#1296db'
    },
  }

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Home />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))

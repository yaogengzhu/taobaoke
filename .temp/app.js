import Taro, { Component } from "@tarojs/taro-h5";

// 全局引入taro-ui样式
import 'taro-ui/dist/style/index.scss'; // 全局引入一次即可
import './app.scss';
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
import { View, Tabbar, TabbarContainer, TabbarPanel } from '@tarojs/components';
import Nerv from "nervjs";
import { Router, createHistory, mountApis } from '@tarojs/router';
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});

const _taroHistory = createHistory({
  mode: "hash",
  basename: "/",
  customRoutes: {},
  firstPagePath: "/pages/home/home"
});

mountApis(_taroHistory);
class App extends Component {
  state = {
    __tabs: {
      "list": [{
        "pagePath": "/pages/home/home",
        "text": "首页",
        'iconPath': require("././assets/images/home.png"),
        'selectedIconPath': require("././assets/images/home1.png")
      }, {
        "pagePath": "/pages/person/person",
        "text": "会员中心",
        'iconPath': require("././assets/images/Person.png"),
        'selectedIconPath': require("././assets/images/Person1.png")
      }],
      'selectedColor': '#1296db',
      mode: "hash",
      basename: "/",
      customRoutes: {}
    }
  };

  constructor() {
    super(...arguments);
    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    Taro._$app = this;
  }
  componentDidMount() {
    this.componentDidShow();
  }
  componentDidShow() {}
  componentDidHide() {}
  componentDidCatchError() {}
  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <TabbarContainer>

                    <TabbarPanel>
                      
              <Router history={_taroHistory} routes={[{
          path: '/pages/home/home',
          componentLoader: () => import( /* webpackChunkName: "home_home" */'./pages/home/home'),
          isIndex: true
        }, {
          path: '/pages/person/person',
          componentLoader: () => import( /* webpackChunkName: "person_person" */'./pages/person/person'),
          isIndex: false
        }]} customRoutes={{}} />
              
                    </TabbarPanel>

                    <Tabbar conf={this.state.__tabs} homePage="pages/home/home" router={Taro} />

                  </TabbarContainer>;
  }
  config = {
    pages: ["/pages/home/home", "/pages/person/person"],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    "tabBar": { "list": [{ "pagePath": "/pages/home/home", "text": "首页", 'iconPath': require("././assets/images/home.png"), 'selectedIconPath': require("././assets/images/home1.png") }, { "pagePath": "/pages/person/person", "text": "会员中心", 'iconPath': require("././assets/images/Person.png"), 'selectedIconPath': require("././assets/images/Person1.png") }], 'selectedColor': '#1296db', mode: "hash",
      basename: "/",
      customRoutes: {}
    }
  };

  componentWillUnmount() {
    this.componentDidHide();
  }

  componentWillMount() {
    Taro.initTabBarApis(this, Taro);
  }

}
Nerv.render(<App />, document.getElementById('app'));
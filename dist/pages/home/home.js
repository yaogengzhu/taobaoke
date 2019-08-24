"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fetch = require("../../api/index.js");
// 引入图片
var bag = "/assets/images/bag.png";
var food = "/assets/images/food.png";
var man = "/assets/images/man.png";
var women = "/assets/images/women.png";
var meiz = "/assets/images/meiz.png";
var shuama = "/assets/images/shuma.png";
var sport = "/assets/images/sport.png";
var neiyi = "/assets/images/neiyi.png";

var Home = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Home, _BaseComponent);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__50", "anonymousState__temp", "goodsList", "page"], _this.config = {
      navigationBarTitleText: '首页',
      enablePullDownRefresh: false
    }, _this.customComponents = ["AtNoticebar"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: "_constructor",


    // 定义一些不需要渲染的数据
    value: function _constructor() {
      _get(Home.prototype.__proto__ || Object.getPrototypeOf(Home.prototype), "_constructor", this).apply(this, arguments);
      /**
       * 指定config的类型声明为: Taro.Config
       *
       * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
       * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
       * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
       */

      this.state = {
        goodsList: [],
        page: 1
      };
      this.$$refs = [];
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      // 调用函数
      this.getHotGoods();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
    // 下拉触底事件

  }, {
    key: "onReachBottom",
    value: function onReachBottom() {
      var _this2 = this;

      this.setState({
        page: this.state.page + 1
      }, function () {
        _this2.getHotGoods();
      });
    }
    // method

  }, {
    key: "getHotGoods",
    value: function getHotGoods() {
      var _this3 = this;

      fetch.jsonRPC({
        url: '/2/get_hot',
        data: {
          'platform': 2,
          'page_size': 20,
          'page_no': this.state.page
        }
      }).then(function (res) {
        if (_this3.state.page === 1) {
          _this3.setState({
            goodsList: res.data.uatm_tbk_item
          });
        } else {
          _this3.setState({
            goodsList: _this3.state.goodsList.concat(res.data.uatm_tbk_item)
          });
        }
      });
    }
    // 跳转函数 

  }, {
    key: "jumpTopage",
    value: function jumpTopage(type) {
      switch (type) {
        case 'man':
          _index2.default.navigateTo({
            url: '/pages/man/man'
          });
          break;
      }
    }
    // render函数 

  }, {
    key: "_createNavData",
    value: function _createNavData(_$uid) {
      var _this4 = this;

      return function () {
        _this4.anonymousFunc0 = function () {
          return _this4.jumpTopage('man');
        };

        return {
          man: man,
          neiyi: neiyi,
          sport: sport,
          meiz: meiz,
          shuama: shuama,
          women: women,
          food: food,
          bag: bag
        };
      };
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__50 = (0, _index.genCompid)(__prefix + "$compid__50");

      var anonymousState__temp = this._createNavData(__prefix + "mFNsMGEAgb")();

      _index.propsManager.set({
        "marquee": true,
        "single": true,
        "speed": 100
      }, $compid__50);
      Object.assign(this.__state, {
        $compid__50: $compid__50,
        anonymousState__temp: anonymousState__temp
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }]);

  return Home;
}(_index.Component), _class.$$events = ["anonymousFunc0"], _class.$$componentPath = "pages/home/home", _temp2);
exports.default = Home;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Home, true));
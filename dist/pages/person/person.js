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

var daiFuKuan = "/assets/images/daifukuan.png";
var daiFaHuo = "/assets/images/daifahuo.png";
var daiShouHuo = "/assets/images/daishouhuofuben.png";
var tuiHuo = "/assets/images/icon5.png";
var order = "/assets/images/order.png";
var car = "/assets/images/car.png";
var local = "/assets/images/local.png";
var phone = "/assets/images/phone.png";

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["daiFuKuan", "daiFaHuo", "daiShouHuo", "tuiHuo", "order", "car", "local", "phone", "userInfo", "user"], _this.config = {
      navigationBarTitleText: '个人中心'
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",


    // 构造函数 
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
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
      this.$$refs = [];
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      // 调用获取用户信息的界面
      this.getUser();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getMsg();
      this.getUser();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
    // method

  }, {
    key: "getUser",
    value: function getUser() {
      var _this2 = this;

      _index2.default.getUserInfo().then(function (res) {
        // console.log(res)
        _this2.setState({
          userInfo: res.userInfo
        });
      });
    }
  }, {
    key: "getMsg",
    value: function getMsg() {
      this.setState({
        user: {
          nickname: 'Victor',
          avatar: 'https://wx.qlogo.cn/mmopen/vi_32/boS3icoNzmn9k5nCdeTjloVDP6EQ871E0Rt11egbR8aNk9Eer9zvxcw1Uq9H631qhBdge8asUGRuZUOnzngS1Ug/132'
        }
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      Object.assign(this.__state, {
        daiFuKuan: daiFuKuan,
        daiFaHuo: daiFaHuo,
        daiShouHuo: daiShouHuo,
        tuiHuo: tuiHuo,
        order: order,
        car: car,
        local: local,
        phone: phone
      });
      return this.__state;
    }
  }]);

  return Index;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "pages/person/person", _temp2);
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));
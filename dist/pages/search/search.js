"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../api/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 引入外部scss 

var Search = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Search, _BaseComponent);

  function Search() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "kw", "current"], _this.config = {
      navigationBarTitleText: '搜索'
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Search, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Search.prototype.__proto__ || Object.getPrototypeOf(Search.prototype), "_constructor", this).apply(this, arguments);
      // 页面基本配置

      this.state = {
        kw: '',
        current: 1
      };
      this.$$refs = [];
    }
    // 生命周期函数 

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
    // 

    // method

  }, {
    key: "getInputValue",
    value: function getInputValue(e) {
      var kw = e.detail.value;
      this.setState({
        kw: kw
      });
    }
    // 根据关键字搜索店铺

  }, {
    key: "searchByKwShop",
    value: function searchByKwShop() {
      _index4.default.jsonRPC({
        url: '/2/search_shops',
        data: {
          kw: this.state.kw,
          page_no: 1,
          page_size: 20
        }
      }).then(function (res) {
        console.log(res);
      });
    }
    // 根据关键字搜索宝贝

  }, {
    key: "searchByKwProduct",
    value: function searchByKwProduct() {
      _index4.default.jsonRPC({
        url: '/2/search_goods',
        data: {
          kw: this.state.kw,
          page_no: 1,
          page_size: 20
        }
      }).then(function (res) {
        console.log(res);
      });
    }
    // 判断调用哪个接口

  }, {
    key: "toSearch",
    value: function toSearch() {
      console.log('eeee');
      var current = this.state.current;
      if (current === 1) {
        this.searchByKwProduct();
      } else if (current === 2) {
        this.searchByKwShop();
      }
    }
  }, {
    key: "chooseTabs",
    value: function chooseTabs(num) {
      this.setState({
        current: num
      });
    }
    // render 函数页面

  }, {
    key: "_createSearchData",
    value: function _createSearchData(_$uid) {
      var _this2 = this;

      return function () {
        _this2.anonymousFunc0 = function (e) {
          return _this2.getInputValue(e);
        };

        _this2.anonymousFunc1 = function () {
          return _this2.toSearch();
        };

        return {};
      };
    }
  }, {
    key: "_createTabsData",
    value: function _createTabsData(_$uid) {
      var _this3 = this;

      return function () {
        var current = _this3.state.current;


        _this3.anonymousFunc2 = function () {
          return _this3.chooseTabs(1);
        };

        _this3.anonymousFunc3 = function () {
          return _this3.chooseTabs(2);
        };

        return {
          current: current
        };
      };
    }
  }, {
    key: "_createBodyData",
    value: function _createBodyData(_$uid) {
      var _this4 = this;

      return function () {
        var current = _this4.state.current;

        return {
          current: current
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

      var anonymousState__temp = this._createSearchData(__prefix + "djObPzGwSY")();

      var anonymousState__temp2 = this._createTabsData(__prefix + "PWkVNBzVSR")();

      var anonymousState__temp3 = this._createBodyData(__prefix + "ONLtGSvvps")();

      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(e) {
      ;
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(e) {
      ;
    }
  }, {
    key: "anonymousFunc3",
    value: function anonymousFunc3(e) {
      ;
    }
  }]);

  return Search;
}(_index.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3"], _class.$$componentPath = "pages/search/search", _temp2);
exports.default = Search;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Search, true));
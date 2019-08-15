"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// import md5 from 'crypto-js/md5'


var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _crypto = require("../../crypto");

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var md5 = _crypto2.default.createHash('md5');

var makeSign = function makeSign($data, $appSecret) {
  var $str = '';
  var $index = 0;
  var $sortPor = [];
  for (var key in $data) {
    $sortPor.push(key + "=" + $data[key]);
  }
  $sortPor.sort();
  // 转url
  for (var _key in $sortPor) {
    $str = "" + $str + ($index === 0 ? '' : '&') + $sortPor[_key];
    $index++;
  }
  // md5加密
  var $ret = md5($str + "&key=" + $appSecret + 'hex');
  //  console.log($ret)
  return $ret;
};

var baseURL = 'https://openapi.dataoke.com/api';
var appSecret = 'e0a0707f607c5bd9d834da2f606d553f';
var data = {
  version: 'v1.0.0',
  appKey: '5d45899ad9b5a'
};
var sign = makeSign(data, appSecret);
console.log(sign);

var Fetch = function () {
  function Fetch() {
    _classCallCheck(this, Fetch);
  }

  _createClass(Fetch, [{
    key: "jsonRPC",
    value: function jsonRPC(obj) {
      return new Promise(function (resolve, reject) {
        _index2.default.request({
          url: baseURL + obj.url,
          method: "GET",
          data: Object.assign({
            appKey: data.appKey,
            appSecret: appSecret,
            version: data.version,
            sign: sign
          }, obj.data),
          success: function success(res) {
            resolve(res);
          },
          fail: function fail(e) {
            console.log(e);
            reject(e);
          }
        });
      });
    }
  }]);

  return Fetch;
}();

module.exports = new Fetch();

// module.exports = md5
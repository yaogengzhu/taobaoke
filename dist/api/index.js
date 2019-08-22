"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// const baseURL = 'http://api.yaogeng.top'
var baseURL = 'http://127.0.0.1:3000';

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
          data: obj.data,
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
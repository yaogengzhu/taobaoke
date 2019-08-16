import Taro from "@tarojs/taro-h5";
import md5 from 'crypto-js';

// const crypto = require('crypto')
// const md5 = crypto.createHash('md5')

const makeSign = ($data, $appSecret) => {
  let $str = '';
  let $index = 0;
  let $sortPor = [];
  for (let key in $data) {
    $sortPor.push(`${key}=${$data[key]}`);
  }
  $sortPor.sort();
  // 转url
  for (let key in $sortPor) {
    $str = `${$str}${$index === 0 ? '' : '&'}${$sortPor[key]}`;
    $index++;
  }
  // md5加密
  const $ret = md5.update(`${$str}&key=${$appSecret}`).digest('hex');
  return $ret;
};

const baseURL = 'https://openapi.dataoke.com/api';
const appSecret = 'e0a0707f607c5bd9d834da2f606d553f';
const data = {
  version: 'v1.0.0',
  appKey: '5d45899ad9b5a'
};
const sign = makeSign(this.data, this.appSecret);
class Fetch {

  jsonRPC(obj) {
    return new Promise((resolve, reject) => {
      Taro.request({
        url: baseURL + obj.url,
        method: "GET",
        data: Object.assign({
          appKey: data.appKey,
          appSecret: appSecret,
          version: data.version,
          sign: sign
        }, obj.data),
        success: res => {
          resolve(res);
        },
        fail: e => {
          console.log(e);
          reject(e);
        }
      });
    });
  }
}

module.exports = new Fetch();
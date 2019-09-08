import Taro from "@tarojs/taro-h5";
const baseURL = 'https://api.yaogeng.top';
// const baseURL = 'http://127.0.0.1:3000'
class Fetch {
  jsonRPC(obj) {
    return new Promise((resolve, reject) => {
      Taro.request({
        url: baseURL + obj.url,
        method: "GET",
        data: obj.data,
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
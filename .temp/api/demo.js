const config = require('../config/config.js');
const app = getApp();
class Fetch {
  jsonRPC(obj) {
    const requestConfig = Object.assign({
      isShowErrorMessage: false,
      cookie: config.mode === 'production' ? wx.getStorageSync('cookie') : config.cookie
    }, obj);

    if (!app.globalData.shopInfo.id) {
      this.needLogin();
      return Promise.reject();
    }

    return new Promise((resolve, reject) => {
      console.log(config.API_URL, obj.url);
      wx.request({
        url: config.API_URL + obj.url,
        method: 'POST',
        header: {
          Cookie: requestConfig.cookie
        },
        data: Object.assign({
          auth_station_id: app.globalData.shopInfo.id
        }, obj.data),
        success: res => {
          if (res.statusCode == 200) {
            if (res.data.success) {
              resolve(res.data.data);
            } else {
              if (requestConfig.isShowErrorMessage) {
                wx.showModal({
                  title: '系统提示',
                  content: res.data.error_text || '',
                  showCancel: false
                });
              }
              reject(res.data);
            }
          } else if ([401, 403].includes(res.statusCode)) {
            this.needLogin();
          } else {
            wx.showModal({
              title: '系统提示: ',
              content: '[' + res.statusCode + ']请求失败',
              showCancel: false
            });
          }
        },
        fail: () => {
          wx.showModal({
            title: '系统提示: ',
            content: '请求失败，请检查网络连接。',
            showCancel: false
          });
        }
      });
    });
  }

  needLogin() {
    wx.showModal({
      title: '系统提示',
      content: '请先登录再使用',
      confirmText: '重新登录',
      showCancel: false,
      success: () => {
        wx.removeStorageSync('cookie');
        wx.redirectTo({
          url: '/pages/start/start'
        });
      }
    });
  }
}

module.exports = new Fetch();
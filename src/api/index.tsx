import Taro from '@tarojs/taro'

const baseURL = 'http://api.yaogeng.top'

class Fetch {
    jsonRPC(obj){
        return new Promise((resolve, reject) => {
            Taro.request({
                url:baseURL + obj.url,
                method: 'GET' || obj.method,
                data: obj.data,
                success: (res) => {
                    resolve(res)
                },
                fail: (e) =>{
                    console.log(e)
                    reject(e)
                }
            })
        })
    }
}

module.exports = new Fetch()

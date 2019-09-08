import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

// 接口
interface IProps{}
interface IState{}
export default class Man extends Component<IProps, IState> {
    
    constructor() {
        super(...arguments)
        this.state = {}

    }
    // 生命周期函数 
    componentDidMount() {
        let type = this.$router.params.type
        switch (type) {
            case 'man':
                Taro.setNavigationBarTitle({
                    title: '男装'
                })
                break
            case 'neiyi':
                Taro.setNavigationBarTitle({
                    title: '内衣'
                })
                break
            case 'sport':
                Taro.setNavigationBarTitle({
                    title: '运动用品'
                })
                break
            case 'meiz':
                Taro.setNavigationBarTitle({
                    title: '美妆'
                })
                break
            case 'shuma':
                Taro.setNavigationBarTitle({
                    title: '数码'
                })
                break
            case 'women':
                Taro.setNavigationBarTitle({
                    title: '女装'
                })
                break
            case 'food':
                Taro.setNavigationBarTitle({
                    title: '食品'
                })
                break
            case 'bag':
                Taro.setNavigationBarTitle({
                    title: '鞋包服饰'
                })
                break


        }
    }


    render() {
        return (
            <View>
                男装
            </View>
        )
    }
}
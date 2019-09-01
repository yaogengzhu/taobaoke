import Taro, {Component, Config} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'

// 
interface IProps {}
interface IState {
    goodsInfo: any
}

export default class ProductDetail extends Component<IProps, IState> {

    // 页面基本配置 
    config: Config = {
        navigationBarTitleText: '宝贝详情'
    }

    constructor() {
        super(...arguments)
        this.state = {
            goodsInfo: {}
        }
    }


    componentDidMount() {
        // 
        let goodsInfo = this.$router.params.goodsInfo
        this.setState({
            goodsInfo: goodsInfo
        }) 
    }

    render() {
        return(
            <View> hello </View>
        )
    }
}
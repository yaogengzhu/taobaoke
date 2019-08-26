import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'

import fetch from '../../../src/api/index'

// 引入外部scss 
import './search.scss'

// 接口配置
interface IProps { }
interface IState { 
    kw: string
}

export default class Search extends Component<IProps, IState> {
    // 页面基本配置
    config: Config = {
        navigationBarTitleText: '搜索'
    }
    constructor() {
        super(...arguments)
        this.state = {
            kw: ''
        }
    }

    // 生命周期函数 
    componentDidMount() {
        // 
    }



    // method
    getInputValue(e) {
        let kw = e.detail.value
        this.setState({
            kw
        })
    }

    // 根据关键字搜索
    searchByKw() {

        fetch.jsonRPC({
            url: '/2/search_goods',
            data: {
                kw: this.state.kw, //关键字
                page_no: 1, // 默认第一页
                page_size: 20
            }
        }).then(res => {
            console.log(res)
        })
    }
    // 监听函数


    // render 函数页面
    renderSearch() {
        return (
            <View className='search-box'>
                <View className='input_box'>
                    <Input className='input' placeholder='请输入搜索的内容' placeholderStyle='color:#fff' onInput={(e) => this.getInputValue(e)}></Input>
                    <View className='input_icon at-icon at-icon-search' onClick={(e) => this.searchByKw(e)}></View>
                </View>
            </View>
        )
    }

    render() {
        return (<View className='search'>
            {/* 搜索框部分 */}
            {this.renderSearch()}
        </View>
        )
    }
}



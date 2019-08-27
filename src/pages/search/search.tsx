import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'

// 引入标签页
import { AtTabs, AtTabsPane } from 'taro-ui'

import fetch from '../../../src/api/index'
// 引入外部scss 
import './search.scss'

// 接口配置
interface IProps { }
interface IState {
    kw: string,
    current: number
}

export default class Search extends Component<IProps, IState> {
    // 页面基本配置
    config: Config = {
        navigationBarTitleText: '搜索'
    }
    constructor() {
        super(...arguments)
        this.state = {
            kw: '',
            current: 1
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

    // 根据关键字搜索店铺
    searchByKwShop() {
        fetch.jsonRPC({
            url: '/2/search_shops',
            data: {
                kw: this.state.kw, //关键字
                page_no: 1, // 默认第一页
                page_size: 20
            }
        }).then(res => {
            console.log(res)
        })
    }

    // 根据关键字搜索宝贝
    searchByKwProduct() {
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

    // 判断调用哪个接口
    toSearch() {
        console.log('eeee')
        let current = this.state.current
        if (current === 1) {
            this.searchByKwProduct()
        } else if (current === 2) {
            this.searchByKwShop()
        }
    }


    chooseTabs(num) {
        this.setState({
            current: num
        })
    }




    // render 函数页面
    renderSearch() {
        return (
            <View className='search-box'>
                <View className='input_box'>
                    <Input className='input' placeholder='请输入搜索的内容' placeholderStyle='color:#fff' onInput={(e) => this.getInputValue(e)}></Input>
                    <View className='input_icon at-icon at-icon-search' onClick={() => this.toSearch()}></View>
                </View>
            </View>
        )
    }

    renderTabs() {
        const { current } = this.state
        return (
            <View className='search-tabs'>
                <View className='tabs1 '>
                    <View className={'product ' + (current === 1 ? 'active' : '')} onClick={() => this.chooseTabs(1)}>宝贝</View>
                </View>
                <View className='tabs2'>
                    <View className={'shop ' + (current === 2 ? ' active' : '')} onClick={() => this.chooseTabs(2)}>店铺</View>
                </View>
            </View>
        )
    }


    renderBody() {
        const { current } = this.state
        return (
            <View className='search-body'>
                {
                    current === 1
                        ? <View className='body1'>宝贝信息</View>
                        : <View className='body2'>店铺信息</View>
                }
            </View>
        )
    }


    render() {
        return (<View className='search'>
            {/* 搜索框部分 */}
            {this.renderSearch()}
            {this.renderTabs()}
            {this.renderBody()}
        </View>
        )
    }
}



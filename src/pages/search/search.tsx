import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Input, Image } from '@tarojs/components'

// 引入标签页
import { AtTabs, AtTabsPane } from 'taro-ui'

import fetch from '../../../src/api/index'
// 引入外部scss 
import './search.scss'


// 接口配置
interface IProps { }
interface IState {
    kw: string,
    current: number,
    goodsInfo: Array<any>,
    page: number,
    page_shop: number,
    shopInfo: Array<any>
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
            current: 1,
            goodsInfo: [], // 商品列表
            page: 1, // 宝贝的搜素页面
            page_shop: 1, // 店铺的
            shopInfo: []
        }
    }

    // 生命周期函数 
    componentDidMount() {
        // 
    }



    // method

    onReachBottom() {
        this.setState({
            page: this.state.page + 1,
        }, () => {
            this.searchByKwProduct()
        })
    }

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
                page_no: this.state.page, // 默认第一页
                page_size: 20
            }
        }).then(res => {
            console.log(res)
            this.setState({
                shopInfo: res.data.results.n_tbk_shop
            })

        })
    }

    // 根据关键字搜索宝贝
    searchByKwProduct() {
        fetch.jsonRPC({
            url: '/2/search_goods',
            data: {
                kw: this.state.kw, //关键字
                page_no: this.state.page, // 默认第一页
                page_size: 20
            }
        }).then(res => {
            // console.log(res)
            let goodsInfo = res.data.result_list.map_data
            if (this.state.page === 1) {
                this.setState({
                    goodsInfo
                })
            } else {
                this.setState({
                    goodsInfo: this.state.goodsInfo.concat(goodsInfo)
                })
            }
        })
    }

    // 判断调用哪个接口
    toSearch() {
        console.log('eeee')
        let current = this.state.current
        if (current === 1) {
            // 先清空数据
            this.setState({
                goodsInfo: []
            })
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

    // 渲染宝贝信息render
    renderProduct() {
        const { goodsInfo } = this.state
        return (
            <View className='goods'>
                {goodsInfo.map(item => {
                    return (
                        <View className='goodsBox' key={item.item_id}>
                            <View className='left'>
                                <Image src={item.pict_url} className='imgSrc'></Image>
                            </View>
                            <View className='right'>
                                <View className='title'>{item.title}</View>
                                <View className='price'>
                                    <View className='oldPrice'>¥{item.coupon_start_fee}</View>
                                    <View className='newPrice'></View>
                                </View>
                                <View className='bottom'>
                                    <View>{item.coupon_info}</View>
                                    <View>{item.tk_total_sales}人付款</View>
                                    <View>{item.provcity}</View>
                                </View>
                            </View>
                        </View>
                    )
                })}
            </View>

        )
    }

    renderShops() {
        const { shopInfo } = this.state
        return (
            <View className='shops'>
                {
                    shopInfo.map(item => {
                        return (
                            <View className='shops_list' key={1}>
                                <View className='left'>
                                    <Image src={item.pict_url} className='imgSrc'></Image>
                                </View>
                                <View className='right'>
                                    <View className='title'>{item.shop_title}</View>
                                    <View className='type'>{item.shop_type}店</View>
                                    <View className='wang'>{item.seller_nick}</View>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        )
    }


    renderBody() {
        const { current } = this.state
        return (
            <View className='search-body'>
                {
                    current === 1
                        ? <View className='body1'>
                            {this.renderProduct()}
                        </View>
                        : <View className='body2'>
                            {this.renderShops()}
                        </View>
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



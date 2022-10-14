// 搜索模块
import request from '@/utils/request'

// 热搜关键字
export const hotSearch = params => request({
    url: '/search/hot',
    params
})


// 热搜关键字
// 首页 - 推荐最新音乐
export const searchResultList = params => request({
    url: '/cloudsearch',
    params
})
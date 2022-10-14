import Vue from 'vue'
import VUeRouter from 'vue-router'
import Layout from '@/views/Layout'
import Home from '@/views/Home'
import Search from '@/views/Search'
import Play from '@/views/Play'
import Comment from '@/views/Comment'
import SongDetail from '@/views/SongDetail'


Vue.use(VUeRouter)
const routes = [
  {
    path: '/',
    redirect: '/layout'
  },
  {
    path: '/layout',
    component: Layout,
    redirect: '/layout/home',
    children: [
      {
        path: 'home',
        component: Home,
        meta: { // meta保存路由对象额外信息的
          title: "首页"
        }
      },
      {
        path: 'search',
        component: Search,
        meta: {
          title: "搜索"
        }
      }
    ]
  },
  {
    path: '/play',
    component: Play
  },
  {
    path: '/comment',
    component: Comment
  },
  {
    path: '/songdetail',
    component: SongDetail
  }
]
const router = new VUeRouter({
  routes
})
export default router


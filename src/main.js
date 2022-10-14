import Vue from 'vue'
import App from './App.vue'

import "@/mobile/flexible" // 适配
import "@/styles/reset.css" // 初始化样式
import router from "@/router" //导入路由对象

Vue.config.productionTip = false

import {
  NavBar,
  Tabbar,
  TabbarItem,
  Col,
  Row,
  Image as VanImage,
  Cell,
  CellGroup,
  Icon,
  Search,
  PullRefresh,
  List
} from 'vant';
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Col),
  Vue.use(Row),
  Vue.use(VanImage),
  Vue.use(Cell),
  Vue.use(CellGroup),
  Vue.use(Icon),
  Vue.use(Search),
  Vue.use(PullRefresh);
Vue.use(List)





new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

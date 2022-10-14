<template>
  <div>
    <van-nav-bar :title="activeTitle" fixed/>

    <div class="main">
      <router-view></router-view>
    </div>

    <van-tabbar route>
      <van-tabbar-item icon="home-o" replace to="/layout/home"
        >首页</van-tabbar-item
      >
      <van-tabbar-item icon="search" replace to="/layout/search"
        >搜索</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTitle: this.$route.meta.title
    };
  },
  // 路由切换 - 侦听$route对象改变
  watch: {
    $route() {
      this.activeTitle = this.$route.meta.title; // 提取切换后路由信息对象里的title显示
    },
  },
};
</script>

<style scoped>
.main{
    padding-top: 46px;
  padding-bottom: 50px;
}
</style>
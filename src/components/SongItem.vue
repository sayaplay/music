<template>
  <div>
    <van-cell
      center
      :title="name"
      :label="author + ' - ' + name"
      @click="$router.push({ path: '/comment', query: { id: id } })"
    >
      <template #right-icon>
        <van-icon name="play-circle-o" @touchstart="playFn" />
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  props: {
    name: String, //歌名
    author: String, //歌手
    id: Number, //歌曲id
  },
  methods: {
    playFn() {
      this.$router.push({
        path: "/play",
        query: {
          id: this.id, //歌曲id 通过路由跳转传递
        },
      });
    },
  },
};
</script>

<style  scoped>
/* 给单元格设置底部边框 */
.van-cell {
  border-bottom: 1px solid lightgray;
}
.search-icon {
  font-size: 24px;
  line-height: inherit;
}
</style>
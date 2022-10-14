<template>
  <div>
    <van-search
      placeholder="请输入搜索关键词"
      input-align="center"
      v-model="seachValue"
      shape="round"
    />
    <!-- 热门搜索 -->
    <div class="search_wrap" v-if="resultList.length == 0">
      <p class="hot_title">热门搜索</p>
      <!-- 关键字 -->
      <ul class="hot_bane_wrap">
        <li
          class="hot_item"
          v-for="(obj, index) in hotList"
          :key="index"
          @click="btn(obj.first)"
        >
          {{ obj.first }}
        </li>
      </ul>
    </div>

    <!-- 搜索结果 -->
    <div class="search_wrap" v-else>
      <!-- 标题 -->
      <p class="hot_title">最佳匹配</p>
      <!-- <van-cell-group > -->
      <SongItem
        v-for="obj in resultList"
        :key="obj.id"
        :id="obj.id"
        :name="obj.name"
        :author="obj.ar[0].name"
      >
      </SongItem>
    </div>
  </div>
</template>

<script>
import { hotSearchAPI, searchResultListAPI } from "@/api";
import SongItem from "@/components/SongItem";
export default {
  data() {
    return {
      seachValue: "",
      //热搜关键字
      hotList: [],
      // 搜索结果
      resultList: [],
      timer: null, // 输入框-防抖定时器
    };
  },
  components: {
    SongItem,
  },
  async created() {
    const res = await hotSearchAPI();
    console.log(res);
    this.hotList = res.data.result.hots;
  },
  watch: {
    async seachValue(val) {
      clearTimeout(this.timer);

      if (val.length === 0) return (this.resultList = []);
      this.timer = setTimeout(async () => {
        // 搜索框的值改变，立即执行
        const res = await searchResultListAPI({
          type: 1,
          keywords: val,
        });
        console.log(res);
        this.resultList = res.data.result.songs;
      }, 500);
    },
  },
  methods: {
    async btn(str) {
      this.seachValue = str; //点击关键字赋予输入框现实
      const res = await searchResultListAPI({
        type: 1,
        keywords: this.seachValue,
      });
      console.log(res);
      this.resultList = res.data.result.songs;
      setTimeout(() => {
        clearTimeout(this.timer);
      });
    },
  },
};
</script>

<style scoped>
.van-fild__control {
  font-size: 14px !important;
}
/* 搜索容器的样式 */
.search_wrap {
  padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-top: 0.2rem;
  margin-bottom: 1rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}

/* 给单元格设置底部边框 */
.van-cell {
  border-bottom: 1px solid lightgray;
}
</style>
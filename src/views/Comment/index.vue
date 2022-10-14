<template>
  <div>
    <van-nav-bar title="评论" fixed left-arrow @click-left="$router.back()" />

    <div class="main">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-cell v-for="obj in list" :key="obj.id">
            <template>
              <div class="wrap">
                <div class="img_wrap">
                  <img :src="obj.user.avatarUrl" alt="" />
                </div>
                <div class="content_wrap">
                  <div class="header_wrap">
                    <div class="info_wrap">
                      <p>{{ obj.user.nickname }}</p>
                      <!-- <p>{{ obj.time }}</p> -->
                    </div>
                    <div>{{ obj.likedCount }}点赞</div>
                  </div>
                  <div class="footer_wrap"></div>
                  {{ obj.content }}
                </div>
              </div>
            </template>
          </van-cell>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import { getCommentListAPI } from "@/api";
export default {
  data() {
    return {
      list: [], //评论
      isLoading: false, //加载完毕
      loading: false, //加载状态
      finished: false, //如果为true list显示美数据
      page: 0, //当前要请求第几页数据
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async onRefresh() {
      this.list = [];
      this.page = 1;
      this.getList();
    },
    async getList() {
      const res = await getCommentListAPI({
        id: this.$route.query.id,
        limit: 20,
        // offset-分页
        offset: (this.page - 1) * 20,
      });
      res.data.comments.forEach((obj) => this.list.push(obj));
      // this.list = res.data.comments;
      this.isLoading = false;
      this.loading = false;
    },
    async onLoad() {
      this.page++;
      this.getList();
      console.log("onload出发");
    },
  },
};
</script>

<style>
.main {
  padding-top: 46px;
}
.wrap {
  display: flex;
}
.img_wrap {
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 0.266667rem;
}

.img_wrap img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.content_wrap {
  flex: 1;
}
.header_wrap {
  display: flex;
}

.info_wrap {
  flex: 1;
}
.info_wrap p:first-child {
  font-size: 0.37333rem;
  color: #666;
}
.info_wrap p:last-of-type {
  font-size: 0.24rem;
  color: #999;
}
.header_wrap div:last-of-type {
  font-size: 0.293333rem;
  color: #999;
}
/* 评论内容 */
.footer_wrap {
  font-size: 0.4rem;
  color: #333;
}
</style>
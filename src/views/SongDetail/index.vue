<template>
  <div>
    <van-nav-bar title="歌单详情" fixed left-arrow @click-left="$router.back()" />
    <SongItem
      v-for="obj in songItem"
      :key="obj.id"
      :id="obj.id"
      :name="obj.name"
      :author="obj.ar[0].name"
    >
    </SongItem>
  </div>
</template>

<script>
import SongItem from "@/components/SongItem";
import { getSongDetailAPI } from "@/api";
export default {
  data() {
    return {
      songItem: [], //歌单列表
      id: this.$route.query.id, // 上一页传过来的音乐id
    };
  },
  components: {
    SongItem,
  },
  async created() {
    let res = await getSongDetailAPI(this.id);
    console.log(res);
    this.songItem = res.data.playlist.tracks;
    console.log(this.songItem);
  },
};
</script>

<style  scoped>
</style>
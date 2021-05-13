<template>
  <div id="home">
    <!-- 顶部导航 -->
    <nav-bar class="home-nav-bar">
      <template v-slot:center>
        <div>Shopping!</div>
      </template>
    </nav-bar>

    <!-- 轮播图 -->
    <HomeSwiper :banners="banners"></HomeSwiper>

    <!-- 首页推荐 -->
    <home-recommend-view :recommends="recommends"></home-recommend-view>
  </div>
</template>

<script>
// 所需组件
import NavBar from 'components/common/navbar/NavBar.vue';
import HomeSwiper from './childrenComps/HomeSwiper';
import HomeRecommendView from './childrenComps/HomeRecommendView';

// 网络请求
import {getHomeMultidata} from 'network/home.js';


export default {
  name: 'Home',
  data(){
    return {
      banners: [],
      recommends: []
    }
  },

  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView
  },

  created(){
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
}
</script>

<style>
  .home-nav-bar {
    background-color: var(--color-tint);
    color: white;
  }
</style>

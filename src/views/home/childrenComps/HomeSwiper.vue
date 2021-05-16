<template>
  <swiper>
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" :alt="item.tittle" @load="imgLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper';

export default {
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      isLoad: true
    }
  },
  methods: {
    imgLoad(){
      if(this.isLoad){
        // 轮播图是首页图片中加载最慢的，对实现商品tab栏的吸顶效果的offsetTop值的计算是影响最大的
        // 所以判断轮播图加载完成后再计算tab栏的offsetTop以实现其吸顶效果
        this.$emit('HomeSwiperImgLoad')
        this.isLoad = false
      }
    }
  }
}
</script>

<style>

</style>

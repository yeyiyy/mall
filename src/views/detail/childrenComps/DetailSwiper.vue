<template>
  <swiper class="DetailSwiper">
    <swiper-item v-for="(item, index) in topImages" :key="index">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper';

export default {
  name: 'DetailSwiper',
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    // 用于接收展示的轮播图
    topImages: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .DetailSwiper {
    height: 18.75rem;
    overflow: hidden;
  }
</style>

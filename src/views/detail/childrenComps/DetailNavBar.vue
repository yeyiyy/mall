<template>
  <nav-bar>
    <!-- 详情页导航栏中间部分 -->
    <template v-slot:center>
      <div class="itemTitle">
        <div v-for="(item, index) in title" :key="index" class="itemDetail"
              @click="itemClick(index)"
              :class="{active: index == scrollCurrentIndex}">
          {{item}}
        </div>
      </div>
    </template>

    <!-- 导航栏左边返回按钮 -->
    <template v-slot:left>
      <div class="back" @click="backToPrev">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
    </template>

  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';

export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  props: {
    scrollCurrentIndex: {
      type: Number,
      default: 0
    }
  },
  data(){
    return {
      title: ['商品', '参数', '评论', '推荐'],
      // currentIndex: 0,
    }
  },
  methods: {
    /*
    *   监听事件
     */

    // 导航栏点击事件
    itemClick(index){
      // this.currentIndex = this.scrollCurrentIndex
      this.$emit('navBarClick', index)
    },

    // 导航栏返回按钮点击
    backToPrev(){
      this.$router.back()
    },
  }
}
</script>

<style scoped>
  .itemTitle {
    display: flex;
    font-size: .8125rem;
  }

  .itemDetail {
    flex: 1;
  }

  .active {
    color: var(--color-high-text);
  }

  .back img {
    margin-top: .625rem;
  }
</style>

<template>
  <!-- 在vue中设置refs属性以便可以准确取到想要的标签或组件，以class取值容易取到相同类 -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// 引入Better-Scroll插件，解决移动端滚动场景问题
import BScroll from '@better-scroll/core';
import PullUp from '@better-scroll/pull-up';
import ObserveDOM from '@better-scroll/observe-dom';
import ObserveImage from '@better-scroll/observe-image';

BScroll.use(PullUp)
BScroll.use(ObserveDOM)
BScroll.use(ObserveImage)

export default {
  name: 'Scroll',
  data(){
    return {
      scroll: null
    }
  },

  props: {
    // 利用父组件传过来的值判断是否需要实时监测滚动位置
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },
    observeDOM: {
      type: Boolean,
      default: false
    },
    observeImage: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // 将回到顶部功能封装成一个组件，以便于调用
    scrollTo(x, y, time=300){
      this.scroll && this.scroll.scrollTo(x, y, time)
    }
  },

  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      observeDOM: this.observeDOM,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      observeImage: this.observeImage,
    })

    // 监听滚动位置，判断是否显示backTop按钮
    if(this.probeType != 0){
      this.scroll.on('scroll', position => {
        this.$emit('scroll', position)
      })
    }
    // 监听上拉加载更多
    if(this.pullUpLoad){
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
        this.scroll.finishPullUp()
      })
    }
  }
}
</script>

<style scoped>

</style>

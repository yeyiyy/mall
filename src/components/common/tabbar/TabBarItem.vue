<template>

  <div class="tab-bar-item" @click="itemClick">
    <!-- 默认展示图标，活跃时展示active图标 -->
    <!-- 留下三个插槽，分别便于插入默认图标、激活图标、文字 -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>

    <!-- 点击时使文字变红（处于激活状态） -->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>

  </div>

</template>

<script>

export default {
  name: 'TabBarItem',
  props:{
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },

  computed:{
    isActive(){
      return this.$route.path.includes(this.path)
    },
    activeStyle(){
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path).catch(()=>{})
    }
  }
}

</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 14px;
  }

  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }
</style>

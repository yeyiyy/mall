<template>
  <div class="tab-control">
    <!-- 利用v-for遍历传过来的数组，从而确定商品tab栏内容 -->
    <!-- 利用@click事件监听点击，使被点击的目标栏改变为激活样式 -->
    <div v-for="(item, index) in titles" :key="index" class="tab-control-item"
        :class="{isActive: index === currentIndex}"
        @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  data(){
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default(){
        return [];
      }
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index;
      this.$emit('tabClick', index)
    }
  }

}
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: .9375rem;

    background-color: #fff;
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item span {
    padding: .1875rem;
  }

  .isActive {
    color: var(--color-high-text);
  }

  .isActive span {
    border-bottom: .0625rem solid var(--color-tint);
  }
</style>

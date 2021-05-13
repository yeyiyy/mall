<template>
  <div id="tab-bar">
    <!-- 留下插槽，以便装入item -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style scoped>
  #tab-bar {
    display: flex;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: #f6f6f6;
    /* box-shadow常用的四个值：x轴偏移量，y轴偏移量，阴影大小，阴影颜色rgba值 */
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
  }


</style>

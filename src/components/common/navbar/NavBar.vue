<template>
  <div class="nav-bar">
    <!-- 导航栏预留三个插槽（左中右）以便所有项目使用 -->
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
  .nav-bar {
    display: flex;

    height: 2.75rem;
    line-height: 2.75rem;
    text-align: center;

    box-shadow: 0 .0625rem .0625rem rgba(100,100,100,.1);
  }

  .left {
    width: 3.75rem;
  }

  .center {
    flex: 1;
  }

  .right {
    width: 3.75rem;
  }


</style>

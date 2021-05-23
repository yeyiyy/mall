<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommendView',
  props: {
    recommends: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
  .recommend {
    display: flex;
    text-align: center;
    padding: .75rem 0 1.25rem;

    border-bottom: .5rem solid #eee;
  }

  .recommend-item {
    flex: 1;
  }
  .recommend-item img {
    width: 80%;
  }
</style>

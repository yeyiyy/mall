<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <!-- 标题信息 -->
    <div class="info-tittle">{{goods.title}}</div>

    <!-- 价格信息 -->
    <div class="info-price">
      <span class="new-price">{{goods.realPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>

    <!-- 其他信息 -->
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>

    <!-- 服务信息 -->
    <div class="info-service">
      <span v-for="index in goods.services.length-1" :key="index" class="info-service-item">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
        <span></span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .base-info {
    width: 100%;
    margin-top: .9375rem;
    padding: 0 .625rem;
    color: #999999;
    border-bottom: .3125rem solid #f2f5f8;
  }

  .info-title {
    text-align: justify;
    color: #222222;
  }

  .info-price {
    margin-top: .625rem;
  }

  .info-price .new-price {
    font-size: 1.5rem;
    color: #ff5777;
  }

  .info-price .old-price {
    font-size: .8125rem;
    margin-left: .3125rem;
    text-decoration: line-through;
  }

  .info-price .discount {
    font-size: .75rem;
    position: relative;
    top: -0.25rem;
    margin-left: .3125rem;
    padding: .1875rem .375rem;
    color: #ffffff;
    border-radius: .5rem;
    background-color: #ff5777;
  }

  .info-other {
    font-size: .8125rem;
    line-height: 1.875rem;
    display: flex;
    justify-content: space-between;
    margin-top: .9375rem;
    border-bottom: .0625rem solid rgba(100, 100, 100, 0.1);
  }

  .info-service {
    line-height: 3.75rem;
    display: flex;
    justify-content: space-between;
  }

  .info-service-item img {
    position: relative;
    top: .125rem;
    width: .875rem;
    height: .875rem;
  }

  .info-service-item span {
    font-size: .8125rem;
    margin-left: .3125rem;
    color: #333333;
  }
</style>

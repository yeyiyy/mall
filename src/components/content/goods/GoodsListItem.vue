<template>
  <div class="goods-item">
    <a :href="goodsItem.link">
      <img :src="goodsItem.show.img" alt="">
      <div class="goods-item-info">
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span class="collect">
          <img src="~assets/img/common/collect.svg" alt="">
          {{goodsItem.cfav}}
        </span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .goods-item {
    position: relative;
    padding-bottom: 40px;

    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 4px;
    /* border:3px solid var(--color-tint); */
  }

  .goods-item-info {
    font-size: 12px;
    text-align: center;
    position: absolute;

    left: 0;
    right: 0;
    bottom: 5px;
    overflow: hidden;
  }

  .goods-item-info p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 5px;
  }

  .price {
    margin-right: 10px;
    color: var(--color-high-text);
  }


  .collect img {
    border: none;
    width: 14px;
    margin-bottom: -2px;
  }


</style>

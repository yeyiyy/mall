<template>
  <div class="goods-item"
        @click="itemClick">
    <img v-lazy="showImg" alt="">
    <div class="goods-item-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">
        <img src="~assets/img/common/collect.svg" alt="">
        {{goodsItem.cfav}}
      </span>
    </div>
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
  },
  computed: {
    showImg(){
      if(this.goodsItem.show != undefined){
        return this.goodsItem.show.img
      }
      else {
        return this.goodsItem.image
      }
    }
  },
  data(){
    return {
      iid: this.goodsItem.iid
    }
  },
  created(){
  },
  methods: {
    itemClick(){
      this.iid = this.goodsItem.iid
      this.$router.push('/detail/' + this.iid)
    },
  },
  created(){
  }
}
</script>

<style scoped>
  .goods-item {
    position: relative;
    padding-bottom: 2.5rem;

    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: .25rem;
    /* border:.1875rem solid var(--color-tint); */
  }

  .goods-item-info {
    font-size: .75rem;
    text-align: center;
    position: absolute;

    left: 0;
    right: 0;
    bottom: .3125rem;
    overflow: hidden;
  }

  .goods-item-info p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: .3125rem;
  }

  .price {
    margin-right: .625rem;
    color: var(--color-high-text);
  }


  .collect img {
    border: none;
    width: .875rem;
    margin-bottom: -0.125rem;
  }


</style>

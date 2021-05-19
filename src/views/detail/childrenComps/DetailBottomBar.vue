<template>
  <div id="detail_bottom_bar">
    <div class="bottom_left">
      <div class="service">
        <i class="icon"></i>
        <span>客服</span>
      </div>
      <div class="shop">
        <i class="icon"></i>
        <span>店铺</span>
      </div>
      <div class="collect" @click="collectClick">
        <i class="icon" :class="{collected: isCollected == true}"></i>
        <span>收藏</span>
      </div>
    </div>

    <div class="bottom_right">
      <div class="cart">
        加入购物车
      </div>
      <div class="buy">
        购买
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isCollected: false
    }
  },
  methods: {
    addToCart() {
      this.$emit("addEvent");
    },
    collectClick(){
      this.isCollected = !this.isCollected
      console.log(this.isCollected);
    }
  },

};
</script>

<style scoped>
#detail_bottom_bar {
  display: flex;
  position: fixed;
  background-color: #fff;
  bottom: 0px;
  left: 0;
  right: 0;
  height: 49px;
  text-align: center;
}
.bottom_left {
  font-size: 12px;
  display: flex;
  flex: 1;
}
.bottom_left > div {
  flex: 1;
  border-right: 1px solid rgba(128, 128, 128, 0.2);
}
.bottom_left .icon {
  display: block;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  width: 20px;
  height: 20px;
  margin: 5px auto;
}
.collect .icon {
  background-position: 0 2px;
}
.collect .collected {
  background-position: 0 -23px;
}
.service .icon {
  background-position: 0 -48px;
}
.shop .icon {
  background-position: 0 -88px;
}
.bottom_right {
  font-size: 16px;
  display: flex;
  flex: 1;
}
.bottom_right > div {
  flex: 1;
  line-height: 49px;
}
.cart {
  background-color: rgb(255, 174, 0);
}
.buy {
  background-color: var(--color-tint);
  color: white;
}
</style>

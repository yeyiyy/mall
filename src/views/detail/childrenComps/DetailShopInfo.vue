<template>
  <div class="shop-info" v-if="Object.keys(shopInfo)">
    <!-- 商家顶部信息 -->
    <div class="shop-top">
      <img :src="shopInfo.logo" alt="">
      <span class="title">{{shopInfo.name}}</span>
    </div>

    <!-- 商家中间部分信息 -->
    <div class="shop-middle">
      <!-- 商家中间部分的左边部分信息 -->
      <div class="shop-middle-left shop-middle-item">
        <div class="shop-info-sells">
          <div class="sells-count">{{sellsCount}}</div>
          <div class="sells-text">总销量</div>
        </div>

        <div class="shop-info-goods">
          <div class="goods-count">{{shopInfo.goodsCount}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <!-- 商家中间部分的右边部分的信息 -->
      <div class="shop-middle-right shop-middle-item">
        <table>
          <tr v-for="(item, index) in shopInfo.score" :key="index">
            <td>{{item.name}}</td>
            <td :class="{'score-better':item.isBetter}" class="score">
              {{item.score}}
            </td>
            <td :class="{'better-more':item.isBetter}" class="better">
              <span>{{item.isBetter ? '高' : '低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>

    <!-- 商家底部信息 -->
    <div class="shop-bottom">
      <div class="enter-shop">进入店铺</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shopInfo: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  computed: {
    sellsCount() {
      const value = this.shopInfo.sells
      if(value < 10000){
        return value
      }
      else {
        return (value / 10000).toFixed(1) + '万'
      }
    },
    abc(){
      return 10000
    }
  }
}
</script>

<style scoped>
  .shop-info {
    padding: 25px 8px;
    border-bottom: 5px solid #f2f5f8;
  }

  .shop-top {
    line-height: 45px;
    display: flex;
    align-items: center;
  }

  .shop-top img {
    width: 45px;
    height: 45px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
  }

  .shop-top .title {
    margin-left: 10px;
    vertical-align: center;
  }

  .shop-middle {
    display: flex;
    align-items: center;
    margin-top: 15px;
  }

  .shop-middle-item {
    flex: 1;
  }

  .shop-middle-left {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    color: #333333;
  }

  .shop-info-sells,
  .shop-info-goods {
    margin-top: -25px;
    height: 20px;
    line-height: 20px;
  }

  .sells-count,
  .goods-count {
    font-size: 18px;
  }

  .sells-text,
  .goods-text {
    font-size: 12px;
    margin-top: 10px;
  }

  .shop-middle-right {
    font-size: 13px;
    color: #333333;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
  }

  .shop-middle-right table {
    width: 120px;
    margin-left: 30px;
  }

  .shop-middle-right table td {
    padding: 5px 0;
  }

  .shop-middle-right .score {
    color: #5ea732;
  }

  .shop-middle-right .score-better {
    color: #f13e3a;
  }

  .shop-middle-right .better span {
    padding: 3px;
    margin-left: 5px;
    text-align: center;
    color: #ffffff;
    background-color: #5ea732;
  }

  .shop-middle-right .better-more span {
    background-color: #f13e3a;
  }

  .shop-bottom {
    margin-top: 10px;
    width: 100%;
    text-align: center;
  }

  .enter-shop {
    font-size: 14px;
    margin: auto;
    height: 30px;
    line-height: 30px;
    width: 150px;
    text-align: center;
    border-radius: 10px;
    background-color: #f2f5f8;
  }
</style>

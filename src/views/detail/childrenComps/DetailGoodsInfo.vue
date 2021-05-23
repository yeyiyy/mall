<template>
  <div class="goods-info" v-if="Object.keys(detailGoodsInfo)">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{ detailGoodsInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div :key="index" v-for="(item, index) in detailGoodsInfo.detailImage">
      <div class="info-key">
        <img src="~assets/img/common/item-info.svg" alt="">
        {{ item.key }}
      </div>
      <div class="info-list">
        <img
          :key="imageIndex"
          :src="image"
          alt=""
          v-for="(image, imageIndex) in item.list"
          @load="imgLoad"
        />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailGoodsInfo',
    data(){
      return {
        count: 0,
        imgLength: 0
      }
    },

    props: {
      detailGoodsInfo: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      imgLoad(){
        if(++this.count == this.imgLength){
          this.$emit('detailImageLoadEnd')
        }
      },
    },
    watch: {
      detailGoodsInfo() {
        if(this.detailGoodsInfo.detailImage[1] != undefined){
          this.imgLength = this.detailGoodsInfo.detailImage[0].list.length + this.detailGoodsInfo.detailImage[1].list.length;
        }
        else {
          this.imgLength = this.detailGoodsInfo.detailImage[0].list.length
        }
      }
    }
  }
</script>

<style scoped>
  .goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-desc {
    padding: 0 15px;
  }

  .info-desc .start,
  .info-desc .end {
    position: relative;
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
  }

  .info-desc .start {
    float: left;
  }

  .info-desc .end {
    float: right;
  }

  .info-desc .start::before,
  .info-desc .end::after {
    position: absolute;
    bottom: 0;
    width: 5px;
    height: 5px;
    content: "";
    background-color: #333333;
  }

  .info-desc .end::after {
    right: 0;
  }

  .info-desc .desc {
    font-size: 14px;
    padding: 20px 0;
  }

  .info-key {
    font-size: 16px;
    margin: 10px 0 10px 15px;
    color: #333333;
    margin-top: 20px;
  }
  .info-key img {
    height: 25px;
    margin-bottom: -7px;
  }

  .info-list img {
    width: 100%;
  }
</style>

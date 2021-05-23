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
    padding: 1.25rem 0;
    border-bottom: .3125rem solid #f2f5f8;
  }

  .info-desc {
    padding: 0 .9375rem;
  }

  .info-desc .start,
  .info-desc .end {
    position: relative;
    width: 5.625rem;
    height: .0625rem;
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
    width: .3125rem;
    height: .3125rem;
    content: "";
    background-color: #333333;
  }

  .info-desc .end::after {
    right: 0;
  }

  .info-desc .desc {
    font-size: .875rem;
    padding: 1.25rem 0;
  }

  .info-key {
    font-size: 1rem;
    margin: .625rem 0 .625rem .9375rem;
    color: #333333;
    margin-top: 1.25rem;
  }
  .info-key img {
    height: 1.5625rem;
    margin-bottom: -0.4375rem;
  }

  .info-list img {
    width: 100%;
  }
</style>

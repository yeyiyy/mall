<template>
  <div id="detail">
    <!-- 详情页导航 -->
    <detail-nav-bar class="detail-nav-bar" @navBarClick="navBarClick" ref="detailNavBar"
                    :scrollCurrentIndex="scrollCurrentIndex">
    </detail-nav-bar>

    <scroll class="detail-scroll"
            ref="detailScroll"
            :click="true"
            :observeDOM="true"
            :probeType= 3
            @scroll="handleScroll"
            :imgDebounceTime="100">
      <!-- 详情页轮播图 -->
      <detail-swiper :topImages="topImages"></detail-swiper>

      <!-- 商品基本数据 -->
      <detail-base-info :goods="goods"></detail-base-info>

      <!-- 商家信息 -->
      <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>

      <!-- 商品详细信息 -->
      <detail-goods-info :detailGoodsInfo="detailGoodsInfo" @detailImageLoadEnd="detailImageLoadEnd"></detail-goods-info>

      <!-- 商品参数信息 -->
      <detail-params-info :rule="goodsRule" :info="goodsInfo" ref="params"></detail-params-info>

      <!-- 商品评论信息 -->
      <detail-comment-info :goodsCommentInfo="goodsCommentInfo" ref="comment"></detail-comment-info>

      <!-- 商品推荐 -->
      <div class="goods-recommend" ref="recommend">
        <div class="goods-recommend-title">
          <img src="~assets/img/common/recommend.svg" alt="">
          <span>看了又看</span>
        </div>
        <goods-list :goods="goodsRecommend"></goods-list>
      </div>
    </scroll>

    <!-- 返回顶部按钮 -->
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>

    <detail-bottom-bar></detail-bottom-bar>
  </div>
</template>

<script>
// 导入子组件
import DetailNavBar from './childrenComps/DetailNavBar';
import DetailSwiper from './childrenComps/DetailSwiper';
import DetailBaseInfo from './childrenComps/DetailBaseInfo';
import DetailShopInfo from './childrenComps/DetailShopInfo';
import DetailGoodsInfo from './childrenComps/DetailGoodsInfo';
import DetailParamsInfo from './childrenComps/DetailParamsInfo';
import DetailCommentInfo from './childrenComps/DetailCommentInfo';
import DetailBottomBar from './childrenComps/DetailBottomBar';

// 导入公共common组件
import Scroll from 'components/common/scroll/Scroll';

// 导入业务content组件
import BackTop from 'components/content/backTop/BackTop';
import GoodsList from 'components/content/goods/GoodsList';

// 导入网络请求
import {getDetail, getRecommend} from 'network/detail';

// 导入展示数据（商品和商家）获取方法
import {GoodsInfo} from 'network/detail';
import {Shop} from 'network/detail';

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    BackTop,
  },
  data(){
    return {
      iid: null,
      topImages: [],
      goods: {},
      shopInfo: {},
      detailGoodsInfo: {},
      goodsRule: {},
      goodsInfo: {},
      goodsCommentInfo: {},
      goodsRecommend: [],
      themeOffsetTop: [],
      scrollCurrentIndex: 0,
      isShowBackTop: false
    }
  },

  methods: {
    detailImageLoadEnd(){
      this.$refs.detailScroll.scroll.refresh();
      this.themeOffsetTop.push(0)
      this.themeOffsetTop.push(this.$refs.params.$el.offsetTop - 44)
      this.themeOffsetTop.push(this.$refs.comment.$el.offsetTop - 44)
      this.themeOffsetTop.push(this.$refs.recommend.offsetTop - 44)
    },

    navBarClick(index){
      this.$refs.detailScroll.scrollTo(0, -this.themeOffsetTop[index], 100)
    },

    handleScroll(position){
      let y = position.y - 44
      const length = this.themeOffsetTop.length
      // 处理详情页顶部导航栏与页面滚动的位置的关系
      for(let i = 0 ; i < length ; i++){
        if(this.detailCurrentIndex !== i && ((i < length - 1 && y <= -this.themeOffsetTop[i] && y > -this.themeOffsetTop[i+1]) ||
        (i === length - 1 && y < -this.themeOffsetTop[i])))
        {
          this.scrollCurrentIndex = i
        }
      }

      // 返回顶部按钮的展示
      this.isShowBackTop = (-position.y) > 1000
    },

    // 返回顶部按钮点击事件
    backTopClick(){
      this.$refs.detailScroll.scrollTo(0, 0, 500)
    },

      // if(y > -this.themeOffsetTop[1] && y <= -this.themeOffsetTop[0]){
      //   this.$refs.currentIndex = '0'
      //   console.log(this.$refs.currentIndex);
      // }
      // else if (y > -this.themeOffsetTop[2] && y <= -this.themeOffsetTop[1]){
      //   this.$refs.currentIndex = '1'
      //   console.log(this.$refs.currentIndex);
      // }
      // else if (y > -this.themeOffsetTop[3] && y <= -this.themeOffsetTop[2]){
      //   this.$refs.currentIndex = '2'
      //   console.log(this.$refs.currentIndex);
      // }
      // else if (y < -this.themeOffsetTop[3]){
      //   this.$refs.currentIndex = '3'
      //   console.log(this.$refs.currentIndex);
      // }
  },

  created(){
    // 保存商品id（iid）
    this.iid = this.$route.params.iid
    // 获取商品详情页信息
    getDetail(this.iid).then(res => {
      const data = res.result;
      // 获取轮播图数据
      this.topImages = data.itemInfo.topImages

      // 获取商品数据
      this.goods = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)

      // 获取商家数据
      this.shopInfo = new Shop(data.shopInfo)

      // 获取商品详细信息
      this.detailGoodsInfo = data.detailInfo

      // 获取商品参数
      const params = data.itemParams
      this.goodsInfo = params.info
      this.goodsRule = params.rule

      // 获取商品评论信息
      if(data.rate.cRate != 0){
        // 此处只有一条商品评论数据
        this.goodsCommentInfo = data.rate.list[0]
      }
    });
    // 获取推荐信息
    getRecommend().then(res => {
      this.goodsRecommend = res.data.list
    })

    // this.$refs.detailScroll.scroll.refresh();


  },
  mounted(){
  }


}
</script>

<style scoped>
  #detail {
    position: relative;
    height: 100vh;
    z-index: 9;
    background-color: #fff;
  }

  .detail-nav-bar {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .detail-scroll {
    height: calc(100% - 44px - 49px);
  }

  .goods-recommend {
    margin-top: 20px;
  }
  .goods-recommend-title {
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    margin-left: 10px;
  }
  .goods-recommend-title img {
    height: 18px;
    margin-bottom: -3px;
    margin-right: 3px;
  }
</style>

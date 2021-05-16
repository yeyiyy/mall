<template>
  <div id="home">
    <!-- 顶部导航 -->
    <nav-bar class="home-nav-bar">
      <template v-slot:center>
        <div>Shopping!</div>
      </template>
    </nav-bar>

    <!-- 首页商品内容tab栏，用于实现吸顶效果（在BScroll中粘性定位sticky无法作用） -->
    <tab-control :titles="['流行', '新款', '精选']"
                  @tabClick="tabClick"
                  ref="tabControlFixed"
                  class="tabClass"
                  v-show="tabFixed">
    </tab-control>

    <!-- 利用封装的scroll插件实现滚动效果 -->
    <scroll class="wrapper"
        ref="scroll"
        :observeDOM="true"
        :observeImage="true"
        :probeType="3"
        @scroll="handleScroll"
        :pullUpLoad="true"
        @pullingUp="loadMore">
      <!-- 轮播图 -->
      <HomeSwiper :banners="banners"
                  @HomeSwiperImgLoad="tabControlOffsetTop">
      </HomeSwiper>

      <!-- 首页推荐 -->
      <home-recommend-view :recommends="recommends"></home-recommend-view>

      <!-- 本周推荐 -->
      <feature-view></feature-view>

      <!-- 首页商品内容tab栏 -->
      <tab-control :titles="['流行', '新款', '精选']"
                    @tabClick="tabClick"
                    ref="tabControlShow">
      </tab-control>

      <!-- 首页商品内容 -->
      <goods-list :goods="currentGoods" ></goods-list>
    </scroll>

    <!-- 返回顶部按钮 -->
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>

  </div>
</template>

<script>
// 导入所需组件
// 公共组件common
import NavBar from 'components/common/navbar/NavBar.vue';
import Scroll from 'components/common/scroll/Scroll.vue';

// 业务组件content
import TabControl from 'components/content/tabControl/TabControl';
import GoodsList from 'components/content/goods/GoodsList';
import BackTop from 'components/content/backTop/BackTop';

// 首页组件
import HomeSwiper from './childrenComps/HomeSwiper';
import HomeRecommendView from './childrenComps/HomeRecommendView';
import FeatureView from './childrenComps/FeatureView.vue';


// 网络请求
import {getHomeMultidata, getHomeGoods} from 'network/home.js';



export default {
  name: 'Home',
  data(){
    return {
      banners: [],
      recommends: [],

      // 新建对象goods保存首页展示商品数据（其分三部分（流行，新品，精选），则对象内部使用三个对象分别存放数据）
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',

      isShowBackTop: false,

      tabOffsetTop: 0,
      tabFixed: false,

      saveY: 0
    }
  },

  computed: {
    // 用于获取首页当前商品信息
    currentGoods(){
      return this.goods[this.currentType].list
    }
  },

  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },

  // Vue生命周期函数
  // 页面加载出来立即获取数据
  created(){
    // 请求轮播图和首页推荐数据
    this.getHomeMultidata()

    // 请求商品数据
    this.getHomeGoods('pop', 0)
    this.getHomeGoods('new', 0)
    this.getHomeGoods('sell', 0)
  },
  mounted(){

  },
  activated(){
    this.$refs.scroll.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
  },
  deactivated(){
    this.saveY = this.$refs.scroll.scroll.y
  },

  methods: {
    /*
    * 事件监听相关方法
    */
    // 点击tab栏事件
    tabClick(index){
      switch (index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControlShow.currentIndex = index
      this.$refs.tabControlFixed.currentIndex = index
    },

    // 返回顶部按钮点击事件
    backTopClick(){
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    // 处理Scroll（滚动）事件，包含返回顶部按钮的展示和tab栏吸顶效果
    handleScroll(position){
    // 返回顶部按钮的展示
      this.isShowBackTop = (-position.y) > 1000

      // tab栏吸顶效果展示
      this.tabFixed = (-position.y) >= this.tabOffsetTop
    },

    // 上拉加载更多事件
    loadMore(){
      this.getHomeGoods(this.currentType)
    },

    // 计算tab栏offsetTop
    tabControlOffsetTop(){
      this.tabOffsetTop = this.$refs.tabControlShow.$el.offsetTop
    },


    /*
    * 网络请求相关方法
    */
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },

    getHomeGoods(type){
      let page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1;
      })
    }
  }
}
</script>

<style scoped>
  #home {
    /* 首部导航栏脱离文档流后，使首页部分下移44px（首部导航栏的高度），从而使页面完全展示 */
    /* padding-top: 44px; */
    height: 100vh;
  }

  .home-nav-bar {
    background-color: var(--color-tint);
    color: white;

    /* 导航栏不能滚动 */
    /* 在使用浏览器原生滚动时的设置，在引用了better-scroll后设置了滚动区域（不包含顶部导航栏，所以其不会滚动，不再需要设置fixed） */
    /* position: fixed;
    top: 0px;
    left: 0px;
    right: 0px; */

    /* 层叠顺序 */
    z-index: 9;

  }

  /* 引入better-scroll插件之前使用粘性定位sticky使得tab栏可以在滚动到一定位置后由relative定位变为fixed定位
      在引入了BScroll插件后粘性定位不可用
  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  } */

  .tabClass {
    position: relative;
    z-index: 9;
  }

  /* .wrapper {
    height: calc(100% - 49px);
    overflow: hidden;
  } */
  .wrapper {
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>

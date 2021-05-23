<template>
  <div id="shop-cart">
    <!-- 购物车导航 -->
    <nav-bar class="shopcart-nav-bar">
      <template v-slot:center>
        购物车({{length}})
      </template>
    </nav-bar>

    <!-- 购物车商品展示 -->
    <cart-list></cart-list>

    <!-- 购物车底部导航栏 -->
    <cart-bottom-bar class="cart-bottom-bar"></cart-bottom-bar>
  </div>
</template>

<script>
// 导入common组件
import NavBar from 'components/common/navbar/NavBar';

// 导入子组件
import CartList from './childrenComps/CartList';
import CartBottomBar from './childrenComps/CartBottomBar';

// 混入vuex中getters的数据
import {mapGetters} from 'vuex';

export default {
  name: 'shopCart',
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    ...mapGetters({
      length: 'cartListLength'
    })
  },

}
</script>

<style scoped>
  #shop-cart {
    overflow: hidden;
    height: 100vh;
  }
  .shopcart-nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>

<template>
  <div id="cart-list">
    <scroll class="wrapper"
            ref="scroll"
            :observeDOM="true"
            :observeImage="true"
            :click="true">
      <div class="cart-list-item" v-for="(item, index) in cartList" :key="index">
        <cart-list-item :item="item"></cart-list-item>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll';

import CartListItem from './CartListItem';

import { mapGetters } from 'vuex';


export default {
  name: 'CartList',
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters([
      'cartList'
    ]
    )
  },
  activated(){
    this.$refs.scroll.scroll.refresh()
  }
}
</script>

<style scoped>
  #cart-list {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  .wrapper {
    height: calc(100% - 3.0625rem - 2.75rem - 2.5rem);
  }
</style>

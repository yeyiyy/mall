<template>
  <div class="cart-bottom-bar">
    <div class="check-button-main" @click="checkButtonClick">
      <check-button class="check-button"
                    :isChecked="isCheckedAll">
      </check-button>
      <span class="check-button-text">全选</span>
    </div>

    <div class="cart-total-price">
      合计：￥{{totalPrice}}
    </div>

    <div class="cart-check-out">
      去结算({{cartLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from '../../../components/common/checkbutton/CheckButton';

import {mapGetters} from 'vuex';

export default {
  name: 'CartBottomBar',
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters([
      'cartList'
    ]),
    totalPrice(){
      return this.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue += item.count * item.price
      }, 0).toFixed(2)
    },
    cartLength(){
      return this.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue += item.count
      }, 0)
    },

    isCheckedAll(){
      if(this.cartList.length == 0) {
        return false
      }
      return !this.cartList.find(item => {
        return !item.checked
      })
      // const unChecked = this.cartList.find(item => {
      //   return !item.checked
      // })
      // if(unChecked == undefined){
      //   return true
      // }
      // else return false
    }
  },

  methods: {
    checkButtonClick(){
      if(this.isCheckedAll){
        this.cartList.forEach(item => {
          this.$store.commit('checkedChange', item)
        })
      }
      else {
        this.cartList.forEach(item => {
          if(!item.checked){
            this.$store.commit('checkedChange', item)
          }
        })
      }
    }
  }
}
</script>

<style scoped>
  .cart-bottom-bar {
    position: absolute;
    bottom: 49px;
    height: 40px;
    width: 100%;
    border: 1px solid rgba(128, 128, 128, 0.1);
    background-color: #fff;

    display: flex;
  }

  .check-button-main {
    display: flex;
    height: 40px;
    line-height: 40px;
  }
  .check-button {
    margin: auto 10px;
    height: 10px;
    width: 10px;
  }
  .check-button-text {
    display: inline-block;
    font-size: 14px;
    margin-left: 10px;
  }

  .cart-total-price {
    margin: auto 10px
  }

  .cart-check-out {
    width: 100px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    font-size: 14px;

    background-color: red;
    color: #fff;
    margin: auto;
    margin-right: 0;
  }
</style>

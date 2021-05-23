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

    <div class="cart-check-out" @click="checkOutToast">
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
    checkedlength(){
      let count = 0
      this.cartList.filter(item => {
        if(item.checked){
          count++
        }
      })
      return count
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
    },
    checkOutToast(){
      if(this.checkedlength == 0){
        this.$toast.show('请选择商品后购买', 1500)
      }

    }
  }
}
</script>

<style scoped>
  .cart-bottom-bar {
    position: absolute;
    bottom: 3.0625rem;
    height: 2.5rem;
    width: 100%;
    border: .0625rem solid rgba(128, 128, 128, 0.1);
    background-color: #fff;

    display: flex;
  }

  .check-button-main {
    display: flex;
    height: 2.5rem;
    line-height: 2.5rem;
  }
  .check-button {
    margin: auto .625rem;
    height: .625rem;
    width: .625rem;
  }
  .check-button-text {
    display: inline-block;
    font-size: .875rem;
    margin-left: .625rem;
  }

  .cart-total-price {
    margin: auto .625rem
  }

  .cart-check-out {
    width: 6.25rem;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    font-size: .875rem;

    background-color: red;
    color: #fff;
    margin: auto;
    margin-right: 0;
  }
</style>

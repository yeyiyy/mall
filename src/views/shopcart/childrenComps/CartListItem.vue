<template>
  <div class="cart-list-item">
    <check-button
      :isChecked="item.checked"
      @click.native="checkClick"
      class="check-button"
      ref="checkButtonRef"
    />
    <div class="item-img" @click="infoClick(item)">
      <img :src="item.image" alt="" />
    </div>
    <div class="item-info" @click="infoClick(item)">
      <p class="item-title">{{ item.title }}</p>
      <p class="item-desc">{{ item.desc }}</p>
      <span class="item-price">￥{{ item.price }}</span>
      <span class="item-count">x{{ item.count }}</span>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/common/checkbutton/CheckButton';

export default {
  name: 'CartListItem',
  data(){
    return {
    }
  },
  components: {
    CheckButton
  },
  props: {
    item: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    checkClick() {
      this.$store.commit('checkedChange', this.item)
    },
    //信息点击事件
    infoClick(item) {
      this.$router.push("/detail/" + item.iid);
    }
  },

}
</script>

<style scoped>
  .cart-list-item {
    width: 100%;
    height: 12.5rem;
    border-bottom: .5rem solid rgba(100, 100, 100, 0.1);
    display: flex;
    padding: 0rem .625rem .625rem 0rem;
  }

  .check-button {
    margin: 0 .625rem;
  }

  .item-img {
    width: 40%;
    height: 80%;
    margin-top: 1.5625rem;
  }
  .item-img img {
    width: 100%;
    height: 100%;
    border-radius: .625rem;
  }
  .item-info {
    margin-top: 1.5625rem;
    position: relative;
    width: 50%;
    margin-left: .625rem;
  }
  .item-info p {
    display: inline-block;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .item-title {
    font-size: 1rem;
    padding-bottom: .5rem;
  }
  .item-desc {
    font-size: .875rem;
    color: gray;
  }
  .item-price {
    position: absolute;
    left: 0;
    bottom: .625rem;
    font-size: 1.125rem;
    color: orangered;
  }
  .item-count {
    position: absolute;
    right: .625rem;
    bottom: .75rem;
    font-size: .875rem;
  }
</style>

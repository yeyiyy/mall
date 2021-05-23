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
    height: 200px;
    border-bottom: 8px solid rgba(100, 100, 100, 0.1);
    display: flex;
    padding: 0px 10px 10px 0px;
  }

  .check-button {
    margin: 0 10px;
  }

  .item-img {
    width: 40%;
    height: 80%;
    margin-top: 25px;
  }
  .item-img img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  .item-info {
    margin-top: 25px;
    position: relative;
    width: 50%;
    margin-left: 10px;
  }
  .item-info p {
    display: inline-block;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .item-title {
    font-size: 16px;
    padding-bottom: 8px;
  }
  .item-desc {
    font-size: 14px;
    color: gray;
  }
  .item-price {
    position: absolute;
    left: 0;
    bottom: 10px;
    font-size: 18px;
    color: orangered;
  }
  .item-count {
    position: absolute;
    right: 10px;
    bottom: 12px;
    font-size: 14px;
  }
</style>

<template>
  <div class="wallet">
    <div class="wallet-item">
      <p>0.00</p>
      <p>余额</p>
    </div>
    <div class="wallet-item">
      <p>0</p>
      <p>优惠券</p>
    </div>
    <div class="wallet-item">
      <p>0</p>
      <p>积分</p>
    </div>
    <div class="line"></div>

    <div class="wallet-item wallet-main">
      <img src="~assets/img/profile/wallet.svg" alt="">
      <p>我的钱包</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Wallet"
};
</script>

<style scoped>
.wallet {
  display: flex;
  width: 100%;
}

.wallet .wallet-item {
  display: flex;
  align-items: center;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  height: 85px;
  border-right: 1px solid #eeeeee;
}
.wallet-main img {
  width: 36px;
  height: 36px;
}
.wallet-main {
  font-size: 14px;
  color: #666666;
}

.wallet .wallet-item:nth-of-type(4) {
  border-right: none
}

.wallet .wallet-item p:first-child {
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 3px;
}

.wallet .wallet-item p:last-child {
  font-size: 14px;
  color: #666666;
}
</style>

<template>
  <div class="check-button">
    <div class="button-box" :class="{checked:isChecked}"></div>
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    isChecked: {
      type: Boolean,
      default: true
    }
  },
}
</script>

<style scoped>
.check-button {
  width: 24px;
}
.button-box {
  position: relative;
  top: calc(50% - 12px);
  width: 24px;
  height: 24px;
  margin: 0 auto;
  border-radius: 50%;
  border: 2px solid rgba(128, 128, 128, 0.4);
  background-color: #fff;
}
.check-button .checked {
  width: 24px;
  height: 24px;
  border-style: none;
  top: calc(50% - 12px);
  background-color: red;
  background: url("~assets/img/common/checked.svg") 0 0/90% no-repeat;
}
</style>

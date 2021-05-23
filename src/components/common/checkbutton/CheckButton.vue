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
  width: 1.5rem;
}
.button-box {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 1.5rem;
  height: 1.5rem;
  margin: 0 auto;
  border-radius: 50%;
  border: .125rem solid rgba(128, 128, 128, 0.4);
  background-color: #fff;
}
.check-button .checked {
  width: 1.5rem;
  height: 1.5rem;
  border: none;
  background: url("~assets/img/common/checked.svg") 0 0/100% no-repeat;
}
</style>

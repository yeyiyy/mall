<template>
  <p class="message" v-show="show">{{message}}</p>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    message: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  .message {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.75);
    color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 8px 6px;
  }
</style>

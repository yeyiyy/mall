<template>
  <p class="message" v-show="isShow">{{message}}</p>
</template>

<script>
export default {
  name: 'Toast',
  // props: {
  //   message: {
  //     type: String,
  //     default: ''
  //   },
  //   show: {
  //     type: Boolean,
  //     default: false
  //   }
  // }
  data(){
    return {
      isShow: false,
      message: ''
    }
  },
  methods: {
    show(message, duration){
      duration = duration || 1500

      this.isShow = true
      this.message = message

      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, duration);
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
    padding: .5rem .375rem;

    z-index: 999;
  }
</style>

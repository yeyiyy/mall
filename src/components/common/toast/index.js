// 封装全局插件
import Toast from './Toast.vue';

const obj = {}

obj.install = function (Vue){
  // 声明组件构造器对象
  const toastConstructor = Vue.extend(Toast)

  // 利用组件构造器创建组件对象
  const toast = new toastConstructor()

  // 将组件对象挂载到某一个元素上
  toast.$mount(document.createElement('div'))

  // 将元素插入document.body
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj

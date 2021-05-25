import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store/index';
import toast from './components/common/toast';
import VueLazyLoad from 'vue-lazyload';

import { Icon } from 'vant';
import { Image as VanImage } from 'vant';

Vue.use(Icon)
Vue.use(VanImage)

Vue.use(toast)
Vue.use(VueLazyLoad)

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

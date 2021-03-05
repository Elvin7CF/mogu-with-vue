import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast/index.js'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

// 添加事件总线
Vue.prototype.$bus = new Vue()

// 使用自己的Toast插件
Vue.use(toast);

// 使用Vue-lazyload插件
Vue.use(VueLazyload, {
  loading: require('./assets/img/common/girl.png')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

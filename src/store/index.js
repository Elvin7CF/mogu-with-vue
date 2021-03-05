import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 使用插件 
Vue.use(Vuex);

const state = {
  cartList: []
}

// 创建Store实例，store
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

// 导出
export default store
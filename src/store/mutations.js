import {ADD_COUNT, ADD_TO_CART} from './mutation-types'

export default {
  // mutations最好只做单一更改state值操作，所以把addCart方法放在actions
  [ADD_COUNT](state, payload) {
    payload.count++;
  },
  [ADD_TO_CART](state, payload) {
    state.cartList.push(payload);
  }

}
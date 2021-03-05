export default {
  cartCount(state){
    return state.cartList.length;
  },
  cartList(state){
    return state.cartList;
  },
  isSelectAll(state){
    if(!state.cartList.length) return false;
    return !state.cartList.filter(item => {
      // 过滤，看看未选中对商品长度是否为0
      return !item.checked
    }).length
  }
}
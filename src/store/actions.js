import {ADD_COUNT, ADD_TO_CART} from './mutation-types'

export default {
  addCart(context, payload){
    return new Promise ((resolve, reject) => {
      // 查找购物车中是否已存在相同id商品，有的话保存在oldGoods中
      const oldGoods = context.state.cartList.find( item => item.iid === payload.iid );
      
      if(oldGoods) {
        // 购物车已存在，商品数量+1
        context.commit(ADD_COUNT, oldGoods);
        resolve("+1")
      }else {
        // 商品不存在，保存新商品
        context.commit(ADD_TO_CART, payload);
        resolve("添加成功")
      }
    })
  }
}
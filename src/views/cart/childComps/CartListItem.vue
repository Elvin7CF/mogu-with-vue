<template>
  <div class="cart-item" @click="itemClick">
    <div class="item-left">
      <check-button :isChecked="goodsInfo.checked" class="goods-check"></check-button>
      <img :src="goodsInfo.imgURL" alt="">
    </div>
    <div class="item-right">
      <div class="item-title">{{goodsInfo.title}}</div>
      <div class="item-describe">商品描述：{{goodsInfo.desc}}</div>
      <div class="item-others">
        <span class="price">¥{{goodsInfo.newPrice}}</span>
        <span class="counter">x{{goodsInfo.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton.vue'
export default {
  name: "CartListItem",
  props: {
    goodsInfo: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  data() {
    return {
      isChecked: false
    }
  },
  methods: {
    itemClick() {
      this.goodsInfo.checked = !this.goodsInfo.checked;
    }
  },
  components: { CheckButton },
}
</script>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  width: 100vw;
  overflow: hidden;
  padding: 10px 5px;
  border-bottom: 1px solid #ccc;
  background: #fff;
  border-radius: 10px;
  margin: 5px 12px;
  box-shadow: 2px 2px 2px 1px rgba(1, 1, 1, .05)
}

.item-left {
  display: flex;
  align-items: center;
  margin-right: 5px;
}

.item-left .goods-check {
  margin-right: 10px;
}

.item-left img {
  width: 85px;
  height: 110px;
  display: block;
  border-radius: 6px;
}

.item-right {
  font-size: 15px;
  color: #333;
  padding: 5px 10px;
  overflow: hidden;
  display: flex;
  height: 100%;
  flex-direction: column;
  /* 用column方向布局后，要justify-content起效，需要设置height值 */
  justify-content: space-evenly;

}

.item-title {
  width: 80%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-describe {
  font-size: 12px;
  color: #666;
  margin-top: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  /* css3 两行后省略 */
  /* overflow:hidden; 
  text-overflow:ellipsis;
  display:-webkit-box; 
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2;  */
}

.item-others {
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
}

.item-others .price {
  color: var(--color-high-text);;
}
</style>
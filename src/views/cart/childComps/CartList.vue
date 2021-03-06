<template>
  <scroll ref="scroll" class="wrapper">
    <div class="cart-list" slot="content">
      <cart-list-item v-for="item in cartList" 
                :key="item.iid" 
                :goodsInfo="item"></cart-list-item>
    </div>
  </scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll.vue'
import CartListItem from './CartListItem.vue'
export default {
  name: "CartList",
  components: {
    CartListItem,
    Scroll
  },
  props: {
    cartList: {
      type: Array,
      default(){
        return []
      }
    }
  },
  activated(){
    this.$refs.scroll.refreshScroll();
  }
}
</script>

<style scoped>
.cart-list {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 150px;
}

.wrapper {
  /* 父属性不能没有高度，父属性设置为100vh */
  height: calc(100% - 94px);
  overflow: hidden;
}

</style>
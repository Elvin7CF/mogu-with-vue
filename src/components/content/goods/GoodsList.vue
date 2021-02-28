<template>
  <div class="goods-list">
    <goods-list-item v-for="(item,index) in goodsType" :key="index"
      :goods="item" ></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  name: "GoodsList",
  props: {
    goodsType: {
      type: Array,
      default(){
        return []
      }
    }
  },
  components: {
    GoodsListItem
  }
}
</script>

<style>
.goods-list {
  display: flex;
  /* 多行显示 */
  flex-wrap: wrap;
  /* 每个元素间隔相等 */
  justify-content: space-evenly;
}
</style>
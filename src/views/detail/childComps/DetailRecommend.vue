<template>
  <div v-if="Object.keys(recommendList).length !== 0" class="detail-recommend">
    <div class="recommend-title">热门推荐</div>
    <div class="recommend-list">
      <goods-list-item v-for="(item,index) in recommendList" :key="index"
      :goods="item" ></goods-list-item>
    </div>
  </div>
</template>

<script>
import GoodsListItem from 'components/content/goods/GoodsListItem.vue'

export default {
  name: "DetailRecommend",
  props: {
    recommendList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: { GoodsListItem },
}
</script>

<style scoped>

.detail-recommend {
  padding: 5px;
  padding-bottom: 55px;
  border-bottom: 5px solid #f2f5f8;
}

.recommend-title {
  color: #333;
  font-size: 16px;
  padding: 15px 6px;
}

.recommend-list {
  display: flex;
  /* 多行显示 */
  flex-wrap: wrap;
  /* 每个元素间隔相等 */
  justify-content: space-evenly;
  background: #fff;
}
</style>
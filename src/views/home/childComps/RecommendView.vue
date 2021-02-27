<template>
  <div class="recommend">
    <div class="recommendItem" v-for="item in recommends" :key="item.title">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
.recommend {
  display: flex;
  font-size: 14px;
  padding-bottom: 30px;
  border-bottom: 10px solid #eee;
  text-align: center;
}

.recommendItem {
  flex: 1;
}

.recommend img {
  width: 80px;
  height: 80px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
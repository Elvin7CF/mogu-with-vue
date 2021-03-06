<template>
  <div class="category-sort" v-if="categorySorts.length">
    <div class="sort-item" v-for="item in categorySorts" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image">
        <div class="item-text">{{item.title}}</div>
      </a>
    </div>
    <div class="sort-item" v-show="showBlank1 || showBlank2"></div>
    <div class="sort-item" v-show="showBlank2"></div>
  </div>
</template>

<script>
export default {
  name: "CategorySort",
  props: {
    categorySorts: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    // 若分类数目不为3的倍数，动态增加空item
    showBlank1(){
      return this.categorySorts.length%3 === 2
    },
    showBlank2(){
      return this.categorySorts.length%3 === 1
    }
  }
}
</script>

<style scoped>
.category-sort {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-top: 10px;
}


.sort-item {
  text-align: center;
  font-size: 12px;
  width: 80px;
  height: 95px;
  margin: 5px;
}

.sort-item .item-text {
  margin-top: 10px;
}

.sort-item img{
  width: 80%
}
</style>
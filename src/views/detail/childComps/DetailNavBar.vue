<template>
  <nav-bar class="detail">
    <div class="detail-left" slot="left">
      <img src="~assets/img/common/back.svg" @click="backClick">
    </div>
    <div class="title" slot="center">
      <span class="title-item" 
            v-for="(item,index) in titles" 
            :key="item"
            @click="itemClick(index)"
            :class="{active: currentIndex == index}" >
        {{item}}
      </span>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';

export default {
  name: "DetailNavBar",
  data(){
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('itemClick', index);
    },
    backClick(){
      this.$router.back();
    }
  },
}
</script>

<style scoped>
.detail-left {
  padding: 5px 0 5px 20px;
}

.detail-left img {
  width: 22px;
  height: 22px;
}

.title .title-item{
  font-size: 14px;
  padding: 5px 14px;
  flex: 1
}

.active {
  color: var(--color-high-text);
}
</style>
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
// 导入获取主页数据的方法
import {getHomeMultidata} from 'network/home'
// 导入轮播图子组件
import HomeSwiper from './childComps/HomeSwiper'
// 导入推荐页面组件
import RecommendView from './childComps/RecommendView'

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data(){
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    // vue生命周期，创建组件后
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  }
}

</script>

<style>
.home-nav {
  background: var(--color-tint);
  color: #fff;
  font-weight: 700;
}

</style>
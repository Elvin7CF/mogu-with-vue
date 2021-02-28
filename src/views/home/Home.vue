<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll ref="scroll" class="scroll-wrapper"
           :probeType="3" @scrollPos="showBacktop" 
           :pullUpLoad="true" @pullingUp="pullingUpHandler">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行','新款','精选']" @typeClick="typeChange"></tab-control>
      <goods-list :goodsType="showGoods"></goods-list>
    </scroll>
    <!-- 组件添加事件必须附加native属性 -->
    <back-top @click.native="backtopClick" class="back-top" v-show="isShowBacktop">
      <img src="~assets/img/common/top.png">
    </back-top>

  </div>
</template>

<script>
// 获取导航组件
import NavBar from 'components/common/navbar/NavBar'
// 获取导航控制组件
import TabControl from 'components/content/tabControl/TabControl'
// 导入商品列表组件
import GoodsList from 'components/content/goods/GoodsList'
// 获取滑动组件
import Scroll from 'components/common/scroll/Scroll'
// 获取返回顶部组件
import BackTop from 'components/content/backTop/BackTop'

// 导入轮播图组件
import HomeSwiper from './childComps/HomeSwiper'
// 导入推荐页面组件
import RecommendView from './childComps/RecommendView'
// 导入当下流行组件
import FeatureView from './childComps/FeatureView'


// 导入获取主页数据的方法
import { getHomeMultidata, getHomeGoods } from 'network/home'

export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    Scroll,
    BackTop,
    GoodsList,
    HomeSwiper,
    RecommendView,
    FeatureView,
  },
  data(){
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list:[]},
        new: { page: 0, list:[]},
        sell: { page: 0, list:[]}
      },
      // 当前分类
      currentType: 'pop',
      // 是否显示返回顶部图标
      isShowBacktop: false
    }
  },
  created() {
    // vue生命周期，创建组件后
    this.getMultidata();
    this.getGoods('pop');
    this.getGoods('new');
    this.getGoods('sell');
  },
  computed: {
    showGoods(){
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    /************ 事件监听相关方法 ************/
    typeChange(index){
      // 改变当前选中的分类
      switch(index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
    },
    backtopClick() {
      this.$refs.scroll.scrollTo(0,0)
    },
    // 显示组件
    showBacktop(pos) {
      this.isShowBacktop = pos.y < -1700
    },
    // 处理下拉加载更多
    pullingUpHandler() {
      // 获取更多数据
      this.getGoods(this.currentType);
      this.$refs.scroll.finishPullUp();
    },
    /************ 网络请求相关方法 ************/
    // 获取轮播图和推荐数据
    getMultidata(){
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },

    // 根据页数和组别获取商品数据
    getGoods(type){
      const nextPage = this.goods[type].page+1;
      getHomeGoods(type, nextPage).then(res => {
        let nextList = res.data.list;
        this.goods[type].list.push(...nextList);
        this.goods[type].page += 1;
      
      })
    },
    
  }
}

</script>

<style scoped>
#home {
  padding-top: 44px;
}

.home-nav {
  background: var(--color-tint);
  color: #fff;
  font-weight: 700;
  position: fixed;
  left: 0; right: 0; top: 0;
  z-index: 1;
}

.scroll-wrapper {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

/* 回到顶部样式 */
.back-top {
  position: fixed;
  bottom: 7%;
  right: 2%;
}

</style>
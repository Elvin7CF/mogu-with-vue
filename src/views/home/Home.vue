<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">蘑菇街</div>
    </nav-bar>
    <scroll ref="scroll" class="scroll-wrapper"
           :probeType="3" @scrollPos="showBacktop" 
           :pullUpLoad="true" @pullingUp="pullingUpHandler">
      <div slot="content">
        <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <feature-view></feature-view>
        <tab-control ref="tabControl" :titles="['流行','新款','精选']"
                     @typeClick="typeChange" class="tab-control"></tab-control>
        <goods-list :goodsType="showGoods"></goods-list>
      </div>
      <div slot="fixed">
        <tab-control ref="tabControlFixed" v-show="isShowtabControl" :titles="['流行','新款','精选']"
                    @typeClick="typeChange" class="tab-control-fixed"></tab-control>
      </div>
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
// 导入防抖函数
import { debounce } from 'common/debounce'

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
      isShowBacktop: false,
      // 记录吸顶时的高度
      tabOffsetTop: 0,
      // 是否显示tab-control-fixed
      isShowtabControl: false,
      // 离开Home组件时保存scroll的y坐标
      scrollY: 0
    }
  },
  created() {
    // vue生命周期，创建组件后
    this.getMultidata();
    this.getGoods('pop');
    this.getGoods('new');
    this.getGoods('sell');
  },
  mounted(){
    // 监听图片加载完毕
    const refresh = debounce(this.$refs.scroll.refreshScroll, 200);
    this.$bus.$on('itemImgeLoad', () => {
      refresh();
    })
  },
  activated(){
    // console.log("activated");
    // console.log(this.scrollY);
    this.$refs.scroll.scrollTo(0, this.scrollY, 0);
    this.$refs.scroll.refreshScroll();
  },
  deactivated(){
    // console.log("deactivated");
    this.scrollY = this.$refs.scroll.getScrollY();
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
      // 点击分类时，同时修改两个tabcontrol选中的分类
      this.$refs.tabControlFixed.currentIndex = index;
      this.$refs.tabControl.currentIndex = index;
    },
    backtopClick() {
      this.$refs.scroll.scrollTo(0,0)
    },
    // 监听滚动，显示组件
    showBacktop(pos) {
      this.isShowBacktop = pos.y < -1700;
      this.isShowtabControl = (-pos.y) > this.tabOffsetTop;
      // console.log("图片高度", this.tabOffsetTop);
      // console.log("是否显示", this.isShowtabControl);
      // console.log("y高度",-pos.y);
    },

    // 处理下拉加载更多
    pullingUpHandler() {
      // 获取更多数据
      this.getGoods(this.currentType);
      this.$refs.scroll.finishPullUp();
    },

    // 获取tapControp下模版的offsettop值
    swiperImageLoad(){
      // offsettop：获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置
      // console.log("swiper", this.$refs.tabControl.$el.offsetTop);
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
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
.home-nav {
  font-family: 'ZCOOL QingKe HuangYou', cursive;
  font-size: 20px;
  background: var(--color-tint);
  color: #fff;
}

/* .tab-control-fixed {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
} */

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
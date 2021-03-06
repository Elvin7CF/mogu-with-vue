<template>
  <div id="detail">
    <detail-nav-bar ref="nav" @itemClick="itemClick"></detail-nav-bar>
    <scroll ref="scroll" class="wrapper" :probeType="3" @scrollPos="listenScrollPos">
      <div slot="content">
        <detail-swiper ref="base" :topImages="topImages"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <detail-goods-info :detailInfo="detailInfo" @imagesLoaded="getEachScrollY"></detail-goods-info>
        <detail-param-info ref="param" :goodsParams="goodsParams"></detail-param-info>
        <detail-comment ref="comment" :commentInfo="commentInfo"></detail-comment>
        <detail-recommend ref="recommend" :recommendList="recommendList"></detail-recommend>
      </div>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backtopClick" class="back-top" v-show="isShowBacktop">
      <img src="~assets/img/common/top.png">
    </back-top>
    <toast></toast>
  </div>
</template>

<script>

import DetailNavBar from './childComps/DetailNavBar.vue';
import DetailSwiper from './childComps/DetailSwiper.vue';
import DetailBaseInfo from './childComps/DetailBaseInfo.vue';
import DetailShopInfo from './childComps/DetailShopInfo.vue';
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue';
import DetailParamInfo from './childComps/DetailParamInfo.vue';
import DetailComment from './childComps/DetailComment.vue';
import DetailRecommend from './childComps/DetailRecommend.vue';
import DetailBottomBar from './childComps/DetailBottomBar.vue';


import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop.vue';

import {getDetailById, getRecommend, Goods, Shop, GoodsParams} from 'network/detail'
import Toast from '../../components/common/toast/Toast.vue';

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      goodsParams: {},
      commentInfo: {},
      recommendList: [],
      detailTypeY: [],
      currentIndex: 0,
      isShowBacktop: false
    }
  },
  created(){
    // 获取iid
    this.iid = this.$route.params.iid;
    getDetailById(this.iid).then(res => {
      // 获取结果
      const data = res.result;

      // 从服务器记载顶部图片
      this.topImages = data.itemInfo.topImages;

      // 获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);

      // 获取商家信息
      this.shop = new Shop(data.shopInfo);

      // 获取商品详情
      this.detailInfo = data.detailInfo;

      // 获取商品其他参数
      // 商品参数可能不存在
      data.itemParams.rule = data.itemParams.rule ? data.itemParams.rule : {}
      this.goodsParams = new GoodsParams(data.itemParams.info, data.itemParams.rule);

      // 获取商品评论信息
      if(data.rate.list) {
        this.commentInfo = data.rate.list[0];
      }
      
    });

    // 获取推荐商品数据
    getRecommend().then( (res, err) => {
      if(!err) {
        this.recommendList = res.data.list;
      }
    })

  },
  methods: {
    // 跳转到分类对应的Y坐标
    itemClick(index) {
      this.$refs.scroll.scrollTo(0, -this.detailTypeY[index]);
    },
    // 图片所有加载完后，刷新并获取各分类的Y值
    getEachScrollY() {
      this.$refs.scroll.refreshScroll();
      // 获取各分类滚动Y坐标值
      // y值有偏差，因此微调44
      this.detailTypeY = [];
      this.detailTypeY.push(0);
      this.detailTypeY.push(this.$refs.param.$el.offsetTop-44);
      this.detailTypeY.push(this.$refs.comment.$el.offsetTop-44);
      this.detailTypeY.push(this.$refs.recommend.$el.offsetTop-44);
      this.detailTypeY.push(Number.MAX_VALUE);
    },

    // 监听Scroll的实时滚动,并根据当前Y值改变选中的分类index
    listenScrollPos(pos){
      // let currentY = -pos.y;
      // let curInx = this.$refs.nav.currentIndex;
      // if( currentY >= 0 && currentY < this.detailTypeY[1] && curInx !== 0) {
      //   this.$refs.nav.currentIndex = 0;
      // }else if(currentY >= this.detailTypeY[1] && currentY < this.detailTypeY[2] && curInx !== 1){
      //   this.$refs.nav.currentIndex = 1;
      // }else if(currentY >= this.detailTypeY[2] && currentY < this.detailTypeY[3]  && curInx !== 2){
      //   this.$refs.nav.currentIndex = 2;
      // }else if(currentY >= this.detailTypeY[3] && curInx !== 3){
      //   this.$refs.nav.currentIndex = 3;
      // }

      // 性能优化，先往detailTypeY数组最好加上一个MAX值
      let length = this.detailTypeY.length;
      let currentY = -pos.y;
      for(let i=0; i<length; i++) {
        if( this.currentIndex !== i && ( currentY >= this.detailTypeY[i] &&
            currentY < this.detailTypeY[i+1] ) ) {
              this.currentIndex = i;
              this.$refs.nav.currentIndex = this.currentIndex;
            }
      }

      // 决定是否显示返回顶部图标
      this.isShowBacktop = pos.y < -800;
    },

    // 返回顶部
    backtopClick() {
      this.$refs.scroll.scrollTo(0,0)
    },

    // 添加到购物车功能,把数据保存
    addToCart() {
      const product = {};
      product.iid = this.iid;
      product.imgURL = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.newPrice = this.goods.nowPrice;
      product.count = 1;
      product.checked = true

      // 调用actions的方法
      this.$store.dispatch('addCart', product).then(res => {
        // 调用Toast里到show方法
        this.$toast.show(res);
      })

    }

  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    Scroll,
    DetailComment,
    DetailRecommend,
    DetailBottomBar,
    BackTop,
    Toast,
  },

}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff; 
  height: 100vh;
}

.wrapper {
  height: calc(100% - 44px);
  overflow: hidden;
}

.back-top {
  position: fixed;
  z-index: 9;
  bottom: 10%;
  right: 2%;
}
</style>
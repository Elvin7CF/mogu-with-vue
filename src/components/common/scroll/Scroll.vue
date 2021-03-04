<template>
  <div ref="wrapper">
    <slot name="content"></slot>
    <slot name="fixed"></slot>
  </div>
</template>

<script>
// 导入Better-scroll模块
import BScroll from '@better-scroll/core'
// 导入滚动插件
import Pullup from '@better-scroll/pull-up'
import MouseWheel from '@better-scroll/mouse-wheel'
import ObserveDom from '@better-scroll/observe-dom'
BScroll.use(MouseWheel)
BScroll.use(ObserveDom)
BScroll.use(Pullup)

export default {  
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },

    // 装了该插件就一定要用，不然会报错
    pullUpLoad: {
      type: Boolean,
      default: true
    }
  },
  data(){
    return {
      bscroll: null
    }
  },
  mounted() {
   this.initBscroll();
  },
  methods: {
    // 初始化bs插件
    initBscroll(){
      this.bscroll = new BScroll(this.$refs.wrapper, {
        observeDOM: true,
        mouseWheel: true,
        click: true,
        probeType: this.probeType || 0,
        pullUpLoad: this.pullUpLoad
      });
      // 实时监听滑轮位置,pos(x,y)
      this.bscroll.on('scroll', (pos) => {
        this.$emit('scrollPos', pos )
      });
      // 实现下拉加载功能
      this.bscroll.on('pullingUp', ()=> {
        this.$emit('pullingUp');
      })
    },
    // 滑轮定位到(x,y)位置
    scrollTo(x, y, time=500){
      this.bscroll.scrollTo(x,y,time)
    },
    // 完成下拉，允许下次下拉
    finishPullUp(){
      this.bscroll.finishPullUp();
    },
    // 刷新scroll，重新计算可滑动区域
    refreshScroll(){
      this.bscroll.refresh();
    },
    getScrollY() {
      return this.bscroll ? this.bscroll.y : 0;
    }

  }
}
</script>

<style scoped>

/* .title {
   background: red;
  text-align: center;
  position: fixed;
  top: 100px
} */
</style>
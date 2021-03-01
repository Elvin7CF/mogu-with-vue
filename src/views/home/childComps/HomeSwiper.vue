<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.title">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title" @load="imgLoaded">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
// 导入轮播图组件
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
    }
  },
  data(){
    return {
      imageLoaded: false
      }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imgLoaded(){
      if(!this.imageLoaded){
        this.$emit('swiperImageLoad');
        this.imageLoaded = true;
      }
    }
  }
}
</script>

<style>

</style>
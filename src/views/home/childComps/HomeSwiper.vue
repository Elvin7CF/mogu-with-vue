<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.title">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title">
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
  components: {
    Swiper,
    SwiperItem
  },

}
</script>

<style>

</style>
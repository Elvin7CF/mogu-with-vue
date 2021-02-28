<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <!-- 通过计算属性，根据传入的颜色改变isActive状态时的字体颜色 -->
    <div class="title" :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    // 获取父传递的参数
    path: String,
    activeColor: {
      type: String,
      default: "rgb(228, 110, 134)"
    }
  },
  data(){
    return { 
      // isActive: false
   }
  },
  computed: {
    isActive(){
      // return this.$route.path==this.path
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color: this.activeColor}:{}
    }
  },
  methods: {
    itemClick(){
      // 判断当前路由路径是否与跳转到路径相同，不相同才跳转
      if(this.$route.path !== this.path){
        this.$router.push(this.path);
      }
    }
  }
}
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 12px;
  color: var(--color-text);
}

.tab-bar-item .title {
  padding-top: 4px;
}

.tab-bar-item img {
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
}

</style>
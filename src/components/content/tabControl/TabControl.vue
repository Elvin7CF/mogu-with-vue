<template>
  <div class="tab-control">
    <div class="control-item" v-for="(item, index) in titles"
      :key="item" @click="itemClick(index)" :class="{active: index === currentIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default(){
        return [];
      }
    }
  },
  data(){
    return { currentIndex: 0 }
  },
  methods: {
    itemClick(index, item){
      this.currentIndex = index;
      // 向父组件传递当前选中的分类下标
      this.$emit('typeClick', index);
    }
  }
}
</script>

<style>
.tab-control {
  background: #fff;
  display: flex;
  text-align: center;
  /* 停留属性 */
  position: sticky;
  top: 44px;
}
.control-item {
  flex: 1;
  font-size: 15px;
  line-height: 40px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 2px solid var(--color-high-text);
  padding: 5px;
}
</style>
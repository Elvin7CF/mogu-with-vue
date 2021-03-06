<template>
  <div class="tab-menu">
    <div class="menu-item" v-for="(item,index) in categories" 
                          :key="item.maitKey"
                          :class="{'item-active': index === currentIndex}"
                          @click="itemClick(index)">
      {{item.title}}
    </div>
  </div>
</template>

<script>
export default {
  name: "TabMenu",
  props: {
    categories: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('selectItem', index)
    }
  }
}
</script>

<style scoped>
.tab-menu {
  display: flex;
  flex-direction: column;
}

.menu-item {
  height: 45px;
  width: 90px;
  line-height: 45px;
  text-align: center;    
  color: #666;
  font-size: 14px;
  background: #f2f2f2;
  border-left: 3px solid transparent;
}

.item-active {
  font-weight: 700;
  color: var(--color-tint);
  background-color: #fff;
  border-left: 3px solid var(--color-tint);
}
</style>
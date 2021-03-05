<template>
  <div class="goods">
    <img v-lazy="getImg" :alt="goods.title" @load="imgLoaded" @click="goodsClick">
    <div class="goods-info">
      <p class="title">{{goods.title}}</p>
      <span class="price">¥{{goods.price}}</span>
      <span class="favor">
        <img src="~assets/img/common/collect.svg">
        <span>{{goods.cfav}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goods: {
      type: Object,
      default(){
        return {};
      }
    }
  },
  methods: {
    imgLoaded(){
      // 监听图片，加载完毕发射事件给事件总线
      this.$bus.$emit("itemImgeLoad");
    },
    goodsClick(){
      // 跳转到商品id路由
      this.$router.push('/detail/'+ this.goods.iid)
    }
  },
  computed: {
    getImg() {
        return this.goods.img || this.goods.image || this.goods.show.img
      }
  }
}
</script>

<style scoped>
.goods {
  width: 48%;
  padding-bottom: 5px;
}

.goods img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  text-align: center;
  font-size: 12px;
}

.goods-info .title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0 10px;
  margin-top: 4px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 4px;
}

.goods-info .favor img {
  display: inline;
  padding-top: 3px;
  width: 14px;
  height: 14px;
}

</style>
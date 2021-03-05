<template>
  <div class="bottom-bar">
    <div class="bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon favor"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy" @click="payGoods">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
      this.$emit('addToCart');
    },
    payGoods() {
      this.$toast.show();
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  display: flex;
  position: fixed;
  left: 0; right: 0; bottom: 0;
  text-align: center;
  background-color: #fff;
}

.bar-left, .bar-right {
  display: flex;
  flex: 1;
  align-items: center;
}

.bar-left>div, .bar-right>div {
  flex: 1;
}

.bar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 0 auto 3px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}

.bar-left .service {
  background-position:0 -52px;
}

.bar-left .shop {
  background-position:0 -99px;
}

.bar-left .text {
  font-size: 13px;
  color: #666;
}

.bar-right {
  font-size: 15px;
  color: #fff;
  line-height: 58px;
}

.bar-right .cart {
  background-color: #ffe817;
  color: #333;
}

.bar-right .buy {
  background-color: #f69;
}
</style>
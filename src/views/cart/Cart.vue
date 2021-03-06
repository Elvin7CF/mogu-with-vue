<template>
  <div class="cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{cartCount}})</div>
    </nav-bar>
    <cart-list :cartList="cartList"></cart-list>
    <cart-bottom></cart-bottom>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import CartList from './childComps/CartList.vue';
import CartBottom from './childComps/CartBottom.vue';

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottom,
  },
  computed: {
    cartCount(){
      return this.$store.getters.cartCount;
    },
    cartList(){
      return this.$store.getters.cartList;
    }
  },
}
</script>

<style scoped>
.cart {
  height: 100vh;
  background: #f2f2f2;
}

.cart-nav {
  font-family: 'ZCOOL QingKe HuangYou', cursive;
  font-size: 20px;
  background: var(--color-tint);
  color: #fff;
  margin-bottom: 5px;
}


</style>
<template>
  <div class="cart-bottom">
    <div class="bottom-left" @click="checkAll">
      <check-button class="check-btn" :isChecked="isSelectAll"></check-button>
      <span>全选</span>
    </div>
    <div class="bottom-right">
      <span>合计:</span>
      <span class="total-price">¥ {{totalPrice}}</span>
      <div class="pay" @click="payClick">
        结算({{goodsCount}})
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton.vue'
export default {
  name: "CartBottom",
  components: { CheckButton },
  computed: {
    totalPrice(){
      return this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((pre, item) => {
        return pre + item.newPrice * item.count
      }, 0).toFixed(2)
    },
    goodsCount(){
      return this.$store.state.cartList.filter(item => {
        return item.checked
      }).length
    },
    isSelectAll(){
      return this.$store.getters.isSelectAll
    }
    
  },
  methods: {
    checkAll() {
      if(this.isSelectAll){
        this.$store.state.cartList.forEach(item => {
          item.checked = false
        })
      }else {
        this.$store.state.cartList.forEach(item => {
            item.checked = true
        })
      }
    },
    payClick() {
      if(!this.goodsCount){
        this.$toast.show("你还没有选择宝贝哦～")
      }else{
        this.$toast.show();
      }
    }
  }

}
</script>

<style scoped>
.cart-bottom {
  background: #fff;
  bottom: 49px;
  border-bottom: 1px solid #e7e7e7;
  box-shadow: 0 -1px 5px rgba(100, 100, 100, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  left: 0; right: 0;
  position: fixed;
  z-index: 9;
}

.bottom-left, .bottom-right {
  display: flex;
  align-items: center;
}

.bottom-left .check-btn {
  margin: 0 10px;
}

.bottom-left span {
  font-size: 12px;
  color: #666666;
}

.bottom-right span{
  font-size: 14px;
  margin-right: 10px;
}

.bottom-right .total-price {
  color: var(--color-high-text);
  font-size: 15px;
}

.bottom-right .pay {
  background: var(--color-tint);
  font-size: 15px;
  line-height: 15px;
  text-align: center;
  color: #fff;
  padding: 8px 18px;
  white-space: nowrap;
  margin-right: 10px;
  border-radius: 30px;
}
</style>
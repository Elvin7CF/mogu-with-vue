<template>
  <div>
    <div class="profile-title">我的订单</div>
    <div class="profile-order">
      <div class="order-item">
        <img src="~assets/img/profile/wallet.svg">
        <div class="order-text">待付款</div>
      </div>
      <div class="order-item">
        <img class="img-sm" src="~assets/img/profile/box.svg">
        <div class="order-text">待发货</div>
      </div>
      <div class="order-item">
        <img src="~assets/img/profile/car.svg">
        <div class="order-text">待收货</div>
      </div>
      <div class="order-item">
        <img class="img-sm" src="~assets/img/profile/review.svg">
        <div class="order-text">待评价</div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'ProfileOrder'
}
</script>

<style scoped>
.profile-title {
  color: rgb(78, 77, 77);
  margin-left: 25px;
  margin-top: 20px;
}

.profile-order {
  display: flex;
  overflow: hidden;
  justify-content: space-evenly;
  margin-top: 10px;
}

.order-item {
  text-align: center;
  width: 50px;
  height: 60px;
  margin: 5px;
  color: #666;
  font-size: 14px;
}

.order-item img {
  width: 80%;
}

.order-item .img-sm {
  margin-top: 8px;
  width: 56%;
  margin-bottom: 4px;
}
</style>
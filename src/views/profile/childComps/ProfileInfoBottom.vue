<template>
  <div class="info-bottom">
    <div class="bottom-item">
      <div class="count">0</div>
      <div class="text">收藏夹</div>
    </div>
    <div class="bottom-item">
      <div class="count">0</div>
      <div class="text">关注店铺</div>
    </div>
    <div class="bottom-item">
      <div class="count">0</div>
      <div class="text">足迹</div>
    </div>
    <div class="bottom-item">
      <div class="count">0</div>
      <div class="text">红包卡劵</div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "ProfileInfoBottom",
}
</script>

<style scoped>
.info-bottom {
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
}

.info-bottom .bottom-item {
  width: 100%;
  text-align: center;
  color: #fff;
  font-weight: 300;
  font-size: 14px;
  margin: 0 20px;
}

.bottom-item .text {
  font-size: 12px;
  margin-top: 10px;
}
</style>
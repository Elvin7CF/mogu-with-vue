<template>
  <div>
    <div class="profile-title">更多服务</div>
    <div class="profile-others">
      <div class="others-item">
        <img src="~assets/img/profile/service.svg" alt="">
        <span>联系客服</span>
        <img class="arrow" src="~assets/img/profile/arrow.svg" alt="">
      </div>
      <div class="others-item">
        <img src="~assets/img/profile/message.svg" alt="">
        <span>我的消息</span>
        <img class="arrow" src="~assets/img/profile/arrow.svg" alt="">
      </div>
      <div class="others-item">
        <img src="~assets/img/profile/card.svg" alt="">
        <span>会员卡</span>
        <img class="arrow" src="~assets/img/profile/arrow.svg" alt="">
      </div>
      <div class="others-item">
        <img src="~assets/img/profile/pocket.svg" alt="">
        <span>领劵中心</span>
        <img class="arrow" src="~assets/img/profile/arrow.svg" alt="">
      </div>
      <div class="others-item">
        <img src="~assets/img/profile/theme.svg" alt="">
        <span>主题换肤</span>
        <img class="arrow" src="~assets/img/profile/arrow.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.profile-title {
  color: rgb(78, 77, 77);
  margin-top: 20px;
  margin-left: 25px;
}

.profile-others {
  margin-left: 25px;
}

.others-item {
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  margin-left: 5px;
  margin-top: 20px;
}

.others-item span{
  padding-left: 5px;
  line-height: 30px;
  height: 30px;
  position: relative;
  bottom: 10px;
  font-size: 14px;
  margin-left: 10px;
}

.others-item img {
  width: 25px;
  height: 25px;
}

.arrow {
  float: right;
  margin-right: 25px;
}

</style>
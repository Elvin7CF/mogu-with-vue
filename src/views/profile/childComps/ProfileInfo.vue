<template>
  <div class="profile-info">
    <div class="info-top">
      <div class="info-top-left">
        <img src="~assets/img/common/girl.png">
        <div class="info-name">未登录</div>
      </div>
      <div class="info-top-right">
        <img src="~assets/img/common/profile.svg" alt="">
        <img src="~assets/img/common/gear.svg" alt="">
      </div>
    </div>
    <div class="info-bottom">
      <profile-info-bottom></profile-info-bottom>
    </div>
  </div>
</template>

<script>
import ProfileInfoBottom from './ProfileInfoBottom.vue'

export default {
  name: "ProfileInfo",
  components: {
    ProfileInfoBottom
  }
}
</script>
    

<style scoped>
.profile-info {
  background: var(--color-tint);
  padding: 40px 10px 30px;
}

.info-top {
  display: flex;
  justify-content: space-between;
}

.info-top-left, .info-top-right {
  display: flex;
  overflow: hidden;
}

.info-top-left .info-name {
  color: #fff;
  font-size: 20px;
  margin-left: 15px;
}

.info-top-left img {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: #fff;
  margin-left: 15px;
}

.info-top-right img{
  width: 30px;
  height: 30px;
  margin-left: 10px;
  margin-right: 5px;
}

</style>
<template>
  <div id="app">
    <keep-alive exclude="Detail">  
      <router-view/>
    </keep-alive>
    <main-tab-bar class="main-tab-bar"></main-tab-bar>
  </div>
</template>


<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
@import 'assets/css/base.css';
@import url('https://fonts.googleapis.com/css2?family=ZCOOL+QingKe+HuangYou&display=swap');

.main-tab-bar {
  background: #fff;
}
</style>

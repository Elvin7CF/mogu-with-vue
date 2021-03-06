<template>
  <div class="profile">
    <profile-info></profile-info>
    <scroll class="wrapper">
      <div slot="content">
        <profile-order></profile-order>
        <profile-others></profile-others>

      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll.vue'
import ProfileInfo from './childComps/ProfileInfo.vue'
import ProfileOrder from './childComps/ProfileOrder.vue'
import ProfileOthers from './childComps/ProfileOthers.vue'


export default {
  name: "Profile",
  components: { Scroll, ProfileInfo, ProfileOrder, ProfileOthers},
}
</script>

<style scoped>
.profile {
  height: 100vh;
}

.wrapper {
  height: 100%;
  overflow: hidden;
}
</style>
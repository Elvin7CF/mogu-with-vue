<template>
  <div>
    <h1>个人信息</h1>
    <scroll class="wrapper">
     <div class="content" slot="content">
       <ul>
         <li>111</li>
         <li>111</li>
         <li>111</li>
         <li>111</li>
         <li>111</li>
         <li>111</li>
         <li>111</li>
         <li>111</li>
         <li>111</li>
         <li>111</li>
         <li>111</li>
         <li>111</li>
         <li>111</li>
         <li>111</li>
         <li>111</li>
         <li>111</li>
         <li>111</li>
         <li>111</li>
         <li></li>
         <li></li>
       </ul>
     </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll.vue'


export default {
  name: "Profile",
  components: { Scroll },
}
</script>

<style scoped>
.wrapper {
  height: 300px;
  overflow: hidden;
  background: lightsteelblue;
}
</style>
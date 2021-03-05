<template>
  <div :class="{'toast':isShowToast}">
    {{toastMsg}}
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      isShowToast: false,
      toastMsg: ''
    }
  },
  methods: {
    show(message, duration){
      message = message || "该功能还没开发哦～";
      duration = duration || 2000;

      this.isShowToast = true;
      this.toastMsg = message;

      setTimeout(() => {
        this.isShowToast = false;
        this.toastMsg = '';
      }, duration);
    }
  }
}
</script>

<style scoped>
.toast {
  background-color: rgba(0, 0, 0, 0.6);
  max-width: 40%;
  color: #fff;
  padding: 8px 16px;
  position: fixed;
  left: 50%;
  bottom: 50%;
  font-size: 16px;
  border-radius: 4px;
  text-align: center;
  transform: translateX(-50%);
  transition: all 0.4s ease-in-out 0s;
  z-index: 99;
}

</style>
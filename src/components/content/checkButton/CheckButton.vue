<template>
  <div class="check-button" :class="{'checked': isChecked}">
    <img src="~assets/img/cart/tick.svg">
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.check-button {
  border-radius: 50%;
  border: 2px solid gainsboro;
  width: 20px;
  height: 20px;
  text-align: center;
  
}

.check-button img {
  width: 12px;
  height: 12px;
}

.checked {
  background: var(--color-tint);
  border: 2px solid transparent;
}
</style>
<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-des">
      <div class="star"></div>
      <div class="describe">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="item in detailInfo.detailImage[0].list" 
            :src="item" 
            :key="item"
            @load="imgesLoad">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default() { return {} }
    }
  },
  data(){
    return { imgCount: 0}
  },
  methods: {
    imgesLoad() {
      let imgLength = this.detailInfo.detailImage[0].list.length-1;
      if(this.imgCount == imgLength){
        this.$emit("imagesLoaded");
      }else{
        this.imgCount++;
      }
    }
  }
}
</script>

<style scoped>
.goods-info {
  padding: 15px 0;
  border-bottom: 5px solid #f2f5f8;
}

.info-des {
  padding: 0 15px;
}

.star, .end{
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}

.star {
  float: left;
}

.end {
  float: right;
}

.star::before, .end::after {
  content: '';
  width: 5px;
  height: 5px;
  background-color: #333;
  position: absolute;
  bottom: 0;
}

.end::after {
  right: 0;
}

.describe {
  font-size: 14px;
  padding: 15px;
}

.info-key {
  color: #333;
  font-size: 15px;
  margin: 10px 0 10px 15px;
}

.info-list img {
  width: 100%;
}


</style>
<template>
  <div class="params-info" v-if="Object.keys(goodsParams).length !== 0">
      <div class="param-info">
        <table class="param-sizes">
          <tr v-for="(item,index) in goodsParams.sizes" :key="index">
            <td class="size-item" v-for="index in item.length" :key="index">{{item[index-1]}}</td>
          </tr>
        </table>
        <table class="param-info">
          <tr v-for="(item,index) in goodsParams.infos" :key="index">
            <td class="info-key">{{item.key}}</td>
            <td class="info-value">{{item.value}}</td>
          </tr>
        </table>
        <div class="param-img" v-if="goodsParams.image">
          <img :src="goodsParams.image" alt="">
        </div>
      </div>
  </div>
  
</template>

<script>
export default {
  name: "DetailParamInfo",
  props: {
    goodsParams: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>

.params-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}

.param-info table {
  width: 100%;
  /* 在合并模式下，相邻单元格共享边框。 */
  border-collapse: collapse;
}

.param-info table tr {
  height: 42px;
}

.param-info table tr td {
  border-bottom: 1px solid rgba(100,100,100,.1);
}

.param-sizes {
  border-bottom: 2px solid rgba(0,0,0,.1);
}

.info-key {
  width: 95px;
}

.info-value {
  color: #eb4868
}

.param-img img {
  width: 100%;
  height: 100%;
}
</style>
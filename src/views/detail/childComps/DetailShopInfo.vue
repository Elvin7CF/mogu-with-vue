<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo">
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sell-count">{{shop.sells | sellCountFilter }}</div>
          <div class="sell-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{shop.goodsCount}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'high-score': item.isBetter}">{{item.score}}</td>
            <td><span class="word" :class="{'high-word': item.isBetter}">{{item.isBetter ? '高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  filters: {
    sellCountFilter(sellCount) {
      if(sellCount < 10000) return sellCount;
      else return (sellCount/10000).toFixed(1) + '万';
    }
  }
}
</script>

<style scoped>
.shop-info {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}

.shop-top {
  height: 45px;
  display: flex;
  align-items: center;
}
.shop-top img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid rgba(0,0,0,.1);
}

.shop-top span {
  margin-left: 10px;
}

.shop-middle {
  margin-top: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  color: #333;
}

.shop-middle-left {
  display: flex;
  margin-left: 10px;
  border-right: 1px solid rgba(0,0,0,.1);
}

.info-sells, .info-goods {
  padding: 0 16px;
}

.sell-count, .goods-count {
  font-size: 18px;
}

.sell-text, .goods-text {
  margin-top: 10px;
  font-size: 12px;
}

.shop-middle-right {
  font-size: 13px;
  color: #333;
}

.shop-middle-right table {
  width: 120px;
  margin-left: 30px;
}

.shop-middle-right table td {
  padding: 5px 0;
}

.shop-middle-item {
  flex: 1;
}

.score {
  color: #5ea732;
}

.word {
  color: #fff;
  background-color: #5ea732;
}

.high-score {
color: #f13e3a;
}

.high-word {
  background-color: #f13e3a;
}

.shop-bottom {
  text-align: center;
  margin-top: 10px;
}

.enter-shop {
  display: inline-block;
  background-color: #f2f5f8;
  border-radius: 5px;
  width: 150px;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
}
</style>
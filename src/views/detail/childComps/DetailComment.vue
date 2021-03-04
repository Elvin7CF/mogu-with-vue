<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="detail-comment">
    <div class="comment-title">
      <div class="title-left">用户评价</div>
      <div class="title-right">
        <span>更多</span>
        <img src="~assets/img/common/back.svg" alt="">
      </div>
    </div>
    <div class="comment-user">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="comment-user-text">
      <p>{{commentInfo.content}}</p>
      <div class="user-others">
        <span>{{commentInfo.created | dateFilter}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
    </div>
    <div class="user-imgs">
      <img :src="item" v-for="(item, index) in commentInfo.images" :key="index">
    </div>

  </div>
</template>

<script>
import {formatDate} from "@/common/utils";

export default {
  name: "DetailComment",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    dateFilter(value){
      let date = new Date(value*1000);
      return formatDate(date, 'yyyy-mm-dd')
    }
  }
}
</script>

<style scoped>
.detail-comment {
  color: #333;
  padding: 10px 15px;
  border-bottom: 5px solid #f2f5f8;
}

.comment-title {
  display: flex;
  justify-content: space-between;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0,0,0,.1);
}

.title-right {
  position: relative;
  padding-top: 3px;
  margin-right: 15px;
  font-size: 13px;
}

.title-right img {
  width: 14px;
  transform: rotateY(180deg);
  margin-left: 5px;
  position: absolute;
  top: 20px;
}

.comment-user {
  padding: 10px 0 5px;
  display: flex;
  align-items: center;
  font-size: 15px;
}

.comment-user img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin-right: 10px;
}


.comment-user-text p {
  margin-top: 2px;
  color: #777;
  font-size: 14px;
  line-height: 1.5;
}

.user-others {
  font-size: 12px;
  color: #999;
  margin: 10px 0;
}

.user-others span {
  margin-right: 8px;
}

.user-imgs img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>
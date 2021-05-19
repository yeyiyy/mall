<template>
  <div>
    <div class="comment-info" v-if="Object.keys(goodsCommentInfo).length != 0">
      <!-- 商品评价顶部区域 -->
      <div class="comment-info-header">
        <div class="comment-title">用户评价</div>
        <div class="comment-more">更多</div>
      </div>

      <!-- 商品评价主要区域 -->
      <div class="comment-info-main">
        <div class="user-info">
          <img :src="goodsCommentInfo.user.avatar" alt="">
          <span class="user-info-name">{{goodsCommentInfo.user.uname}}</span>

          <div class="user-comment-info-time">{{this.commentData}}</div>
        </div>

        <div class="user-comment-text">{{goodsCommentInfo.content}}</div>

        <div class="user-comment-img" v-if="goodsCommentInfo.images != undefined">
          <div v-for="(item, index) in goodsCommentInfo.images" :key="index">
            <img :src="item" alt="">
          </div>
        </div>

        <div class="user-comment-info">
          <span class="user-comment-info-style">{{goodsCommentInfo.style}}</span>
        </div>


      </div>
    </div>

    <div class="comment-info" style="color: red;" v-else>暂无用户评论</div>
  </div>
</template>

<script>
// 导入工具函数
import {formatDate} from 'common/utils';

export default {
  name: 'DetailCommentInfo',
  props: {
    goodsCommentInfo: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  computed: {
    commentData(){
      const date = new Date(this.goodsCommentInfo.created * 1000)
      return formatDate(date, 'yyyy-MM-dd')
    }
  },
  created(){
  }
}
</script>

<style scoped>
  .comment-info {
    padding: 5px 12px;
    color: #333333;
    border-bottom: 5px solid #f2f5f8;
  }

  .comment-info-header {
    line-height: 50px;
    height: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .comment-title {
    font-size: 15px;
    float: left;
  }

  .comment-more {
    font-size: 13px;
    float: right;
    margin-right: 10px;
  }

  .user-info {
    padding: 10px 0 5px;
  }

  .user-info img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }

  .user-info-name {
    font-size: 15px;
    position: relative;
    top: -15px;
    margin-left: 10px;
  }

  .user-comment-info-time {
    float: right;
    font-size: 10px;
    margin-top: 15px;
    color: #999999;
  }

  .user-comment-text {
    padding: 3px 5px 5px;
    font-size: 14px;
    line-height: 1.5;
    color: #777777;
  }

  .user-comment-info {
    font-size: 10px;
    margin-top: 5px;
    color: #999999;
  }

  .user-comment-img {
    margin-top: 10px;
  }

  .user-comment-img img {
    width: 70px;
    height: 70px;
    margin-right: 5px;
  }
</style>

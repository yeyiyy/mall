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

    <div class="comment-info no-comment" style="color: red;" v-else>暂无用户评论</div>
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
    padding: .3125rem .75rem;
    color: #333333;
    border-bottom: .3125rem solid #f2f5f8;
  }

  .comment-info-header {
    line-height: 3.125rem;
    height: 3.125rem;
    border-bottom: .0625rem solid rgba(0, 0, 0, 0.1);
  }

  .comment-title {
    font-size: .9375rem;
    float: left;
  }

  .comment-more {
    font-size: .8125rem;
    float: right;
    margin-right: .625rem;
  }

  .user-info {
    padding: .625rem 0 .3125rem;
  }

  .user-info img {
    width: 2.625rem;
    height: 2.625rem;
    border-radius: 50%;
  }

  .user-info-name {
    font-size: .9375rem;
    position: relative;
    top: -0.9375rem;
    margin-left: .625rem;
  }

  .user-comment-info-time {
    float: right;
    font-size: .625rem;
    margin-top: .9375rem;
    color: #999999;
  }

  .user-comment-text {
    padding: .1875rem .3125rem .3125rem;
    font-size: .875rem;
    line-height: 1.5;
    color: #777777;
  }

  .user-comment-info {
    font-size: .625rem;
    margin-top: .3125rem;
    color: #999999;
  }

  .user-comment-img {
    margin-top: .625rem;
  }

  .user-comment-img img {
    width: 4.375rem;
    height: 4.375rem;
    margin-right: .3125rem;
  }

</style>

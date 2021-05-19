<template>
  <div class="detail-params" v-if="Object.keys(rule) && Object.keys(info)">
    <!-- 尺码表 -->
    <div class="params-rule">
      <div class="rule-key">
        <img src="~assets/img/common/show.svg" alt="">
        {{rule.key}}
      </div>
      <div class="rule-table" v-for="(table, index) in rule.tables" :key="index">
        <table>
          <tr v-for="(size, index) in table" :key="index">
            <td v-for="(item, index) in size" :key="index" class="rule-item">
              {{item}}
            </td>
          </tr>
        </table>
        <div class="rule-tips">{{rule.disclaimer}}</div>
      </div>
    </div>

    <!-- 信息表 -->
    <div class="params-info">
      <div class="info-key">
        <img src="~assets/img/common/show.svg" alt="">
        {{info.key}}
      </div>
      <div class="info-table">
        <table>
          <tr v-for="(item, index) in info.set" :key="index">
            <td class="info-item-key info-item">{{item.key}}</td>
            <td class="info-item-value info-item">{{item.value}}</td>
          </tr>
        </table>
      </div>

      <div class="info-img" v-if="info.image">
        <img :src="info.image" alt="" />
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'DetailParamsInfo',
  data(){
    return {
    }
  },
  props: {
    info: {
      type: Object,
      default(){
        return {}
      }
    },
    rule: {
      type: Object,
      default(){
        return {}
      }
    }
  },
}
</script>

<style scoped>
  .detail-params {
    font-size: 14px;
    padding: 20px 15px;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-key,
  .rule-key {
    font-size: 16px;
    margin: 10px 0 10px 15px;
    color: #333333;
    margin-top: 20px;
  }
  .rule-key img,
  .info-key img {
    height: 22px;
    margin-bottom: -6px;
    margin-left: -20px;
  }

  .detail-params table {
    width: 100%;
    border-collapse: collapse;
  }
  .detail-params table tr {
    height: 42px;
  }
  .detail-params table tr td {
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  }

  .rule-tips {
    margin-top: 5px;
    margin-bottom: 30px;
    font-size: 12px;
  }
  .rule-item{
    width: 25%;
  }


  .info-item-key {
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    width: 95px;
  }
  .info-table {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
  .info-item-value {
    color: #eb4868;
  }
  .info-img img {
    width: 100%;
  }

</style>

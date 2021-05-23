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
    font-size: .875rem;
    padding: 1.25rem .9375rem;
    border-bottom: .3125rem solid #f2f5f8;
  }

  .info-key,
  .rule-key {
    font-size: 1rem;
    margin: .625rem 0 .625rem .9375rem;
    color: #333333;
    margin-top: 1.25rem;
  }
  .rule-key img,
  .info-key img {
    height: 1.375rem;
    margin-bottom: -0.375rem;
    margin-left: -1.25rem;
  }

  .detail-params table {
    width: 100%;
    border-collapse: collapse;
  }
  .detail-params table tr {
    height: 2.625rem;
  }
  .detail-params table tr td {
    border-bottom: .0625rem solid rgba(100, 100, 100, 0.1);
  }

  .rule-tips {
    margin-top: .3125rem;
    margin-bottom: 1.875rem;
    font-size: .75rem;
  }
  .rule-item{
    width: 25%;
  }


  .info-item-key {
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    width: 5.9375rem;
  }
  .info-table {
    border-top: .0625rem solid rgba(0, 0, 0, 0.1);
  }
  .info-item-value {
    color: #eb4868;
  }
  .info-img img {
    width: 100%;
  }

</style>

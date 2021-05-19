import {request} from './request';

// 导出网络请求方法
export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend(){
  return request({
    url: '/recommend'
  })
}

// 导出详情页商品展示信息
export class GoodsInfo {
  constructor(itemInfo, columns, services){
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.realPrice = itemInfo.lowNowPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.goodsCount = shopInfo.cGoods;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
  }
}

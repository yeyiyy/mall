// 封装网络请求方法，防止过度依赖axios库

import {request} from './request';

export function getHomeMultidata(){
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page){
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}

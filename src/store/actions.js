export default {
  // aChangeInfo(context, payload){
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       context.commit('changeInfo')
  //       console.log(payload);

  //       resolve('我是返回的数据')
  //     }, 1000);
  //   })
  // }

  addToCart(context, payload){
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(item => {
        return item.iid === payload.iid
      })

      if(oldProduct){
        context.commit('addCount', oldProduct)
        resolve('商品数量+1')
      }
      else{
        context.commit('addToCart', payload)
        resolve('商品添加至购物车')
      }
    })
  }
}

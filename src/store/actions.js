export default {
  aChangeInfo(context, payload){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('changeInfo')
        console.log(payload);

        resolve('我是返回的数据')
      }, 1000);
    })
  }
}

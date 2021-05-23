import Vue from 'vue';
//定义类型常量并引入
// import {
//   INCREMENT
// } from './mutations-type';

export default {
  // [INCREMENT](state){
  //   state.counter++;
  // },
  // decrement(state){
  //   state.counter--;
  // },
  // incrementCount(state, n){
  //   return state.counter += n;
  // },
  // addStudent(state, stu){
  //   state.students.push(stu);
  // },

  // changeInfo(state){
  //   Vue.set(state.info, 'address', 'SiChuan')
  // },
  // deleteInfo(state){
  //   Vue.delete(state.info, 'money')
  // },

  // 商品已在购物车中，购物车内商品数量+1
  addCount(state, payload){
    payload.count += 1
  },

  // 将商品加入购物车
  addToCart(state, payload){
    payload.count = 1
    payload.checked = true
    state.cartList.push(payload)
  },

  // 更改商品checked状态
  checkedChange(state, payload){
    payload.checked = !payload.checked
  }
}

import Vue from 'vue';
//定义类型常量并引入
// import {
//   INCREMENT
// } from './mutations-type';
import utils, { debounce } from '../common/utils';

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

  imgLoad(state){
    state.imgLoadEnd = true
  }
}

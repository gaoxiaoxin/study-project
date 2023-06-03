import { defineStore } from 'pinia';

// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用store的名字, 同时以`use`开头且以`Store`结尾

// 第一个参数是你的应用中 Store 的唯一ID
// 第二个参数可以接受两类值，
// 1. Setup 函数
// 2. Option 函数

// Option 格式
export const useAlertStore = defineStore('alert', {
  state: () => ({}),
});

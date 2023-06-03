import { defineStore } from 'pinia';
import { ref } from 'vue';
// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用store的名字, 同时以`use`开头且以`Store`结尾

// 第一个参数是你的应用中 Store 的唯一ID
// 第二个参数可以接受两类值，
// 1. Setup 函数
// 2. Option 函数

// Option 格式
export const useAlertStore = defineStore('alert', {
  state: () => ({
    count: 0,
  }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});

// Setup Store 格式

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  function increment() {
    count.value++;
  }
  return { count, increment };
});

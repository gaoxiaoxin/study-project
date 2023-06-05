import { defineStore } from 'pinia';
import { ref } from 'vue';
// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用store的名字, 同时以`use`开头且以`Store`结尾

// 第一个参数是你的应用中 Store 的唯一ID
// 第二个参数可以接受两类值，
// 1. Setup 函数
// 2. Option 函数

// Option 格式
export const useAlertStore = defineStore('alert', {
  /**
   * 类似于组件的 data，用来存储全局状态
   * 1. 必须是函数, 因为这样是为了在服务端渲染的时候避免交叉请求导致的数据状态污染。
   * 2. 必须是箭头函数，这样是为了更好的 Ts 类型推导
   */
  state: () => ({
    count: 0,
  }),
  /**
   * 类似于组件的computed， 用来封装计算属性，有缓存功能
   */
  getters: {
    double: (state) => state.count * 2,
  },
  /**
   * 类似于组件的methods，封装业务逻辑，修改state
   */
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

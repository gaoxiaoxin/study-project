import Vue from "vue";

Vue.directive("focus", {
  bind: function () {
    console.log("我被初始化调用了");
  },
  inserted: function (el) {
    console.log("我被插入了");
    el.focus();
  },
});

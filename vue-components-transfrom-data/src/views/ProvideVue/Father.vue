<template>
  <div class="father">
    我是父组件, 我在测试project传参
    <Children></Children>
  </div>
</template>

<script>
import Children from './Children.vue'
export default {
  components: {
    Children
  },
  provide: {
    name: '小白白'
  }
}
</script>

<style></style>

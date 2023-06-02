<template>
  <div class="grandson">我是孙子组件,我的老师是{{ teacher }}</div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    teacher: {
      type: String,
      default: 'xiaonn'
    }
  }
}
</script>

<style></style>

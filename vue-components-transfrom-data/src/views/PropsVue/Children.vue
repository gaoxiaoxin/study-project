<template>
  <div class="children">
    我是子组件, 我的名字是{{ name }}我正在测试emits传参
    <button @click="fatherChangeName">改名</button>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '小白白'
    }
  },
  emits: ['change'],
  methods: {
    fatherChangeName() {
      this.$emit('change', '小明')
    }
  }
}
</script>

<style></style>

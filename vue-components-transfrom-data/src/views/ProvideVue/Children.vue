<template>
  <div class="children">我是子组件, 我是{{ name }}</div>
</template>

<script>
export default {
  inject: ['name']
}
</script>

<style></style>

<script setup lang="ts">
import { ref } from 'vue';
let bg = ref(false);
</script>

<template>
  <div :class="['box', bg ? 'light' : 'dark']"></div>
  <button @click="bg = !bg">点击切换背景颜色</button>
</template>

<style scoped lang="stylus">
.light
  $--bg-color = white
  background-color: $--bg-color


.dark
  $--bg-color = black
  background-color: $--bg-color


.box
  height 100px
  width 100px
  border 1px solid #333
  background-color: $--bg-color
</style>

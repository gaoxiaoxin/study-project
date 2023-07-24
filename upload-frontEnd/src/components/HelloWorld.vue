<script setup lang="ts">
// import axios from "axios";

const fileChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  console.log(target.files);
}

const submit = () => {
  console.log('submit');

}

</script> 

<template>
  <input type="file" name="file" @change="fileChange">
  <button @click="submit">提交</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

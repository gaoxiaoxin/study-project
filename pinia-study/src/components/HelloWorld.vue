<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore }from '../store/store-ts'
defineProps<{ msg: string }>()
const store = useCounterStore();
const { count } = storeToRefs(store);
const addCount = () => {
  store.increment()
}
</script>

<template>
  <div class="card">
    <button type="button" @click="addCount">count is {{ count }}</button>
  </div>
  
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

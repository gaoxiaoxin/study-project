<template>
  <div class="children" v-bind="$attrs">
    我是子组件{{ $attrs['name'] }}
    <Grandson></Grandson>
  </div>
</template>

<script>
import Grandson from './Grandson.vue'
export default {
  components: {
    Grandson
  },
  created() {
    console.log(this.$attrs)
  }
}
</script>

<style></style>

<template>
  <div class="father">
    <Children :name="name" :age="age"></Children>
  </div>
</template>

<script>
import Children from './Children.vue'

export default {
  data() {
    return {
      name: '小白',
      age: 19
    }
  },
  components: { Children }
}
</script>

<style></style>

<template>
  <div class="father">
    我是父组件,我现在在测试Props传参
    <Children :name="name" @change="changeName"></Children>
  </div>
</template>

<script>
import Children from './Children.vue'
export default {
  components: {
    Children
  },
  data() {
    return {
      name: '小红'
    }
  },
  methods: {
    changeName(name) {
      this.name = name
    }
  }
}
</script>

<style></style>

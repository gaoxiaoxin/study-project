<template>
  <div class="home">
    这是home页面
    <br />
    <p>==========props传参==========</p>
    <props-father></props-father>
    <p>==========project传参========</p>
    <project-father></project-father>
    <p>==========$attr传参==========</p>
    <attr-father></attr-father>
  </div>
</template>

<script>
import PropsFather from '../PropsVue/Father.vue'
import ProjectFather from '../ProvideVue/Father.vue'
import AttrFather from '../AttrVue/Father.vue'
export default {
  components: {
    PropsFather,
    ProjectFather,
    AttrFather
  }
}
</script>

<style></style>

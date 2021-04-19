<template>
  <h1>Input 输入框示例</h1>
  <Demo :component="Input1Demo"/>
  <Demo :component="Input2Demo"/>
  <Demo :component="Input3Demo"/>
</template>

<script lang="ts">
import Input3Demo from '../demo/input/Input3.demo.vue';
import Input1Demo from '../demo/input/Input1.demo.vue'
import Input2Demo from '../demo/input/Input2.demo.vue'
import Demo from '../Demo.vue';
export default {
  components: {Demo,Input3Demo ,Input1Demo,Input2Demo},
  setup() {

    return {Input3Demo ,Input1Demo,Input2Demo};
  }
};
</script>

<style lang="scss" scoped>
</style>
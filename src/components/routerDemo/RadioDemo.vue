<template>
  <h1>Radio 单选框示例</h1>
  <Demo :component="Radio1Demo"/>
  <Demo :component="Radio2Demo"/>
</template>

<script lang="ts">

import Demo from '../Demo.vue';
import Radio1Demo from '../demo/radio/Radio1.demo.vue';
import Radio2Demo from '../demo/radio/Radio2.demo.vue';
export default {
  components: {Demo,},
  setup() {
    return {Radio1Demo, Radio2Demo};
  }
};
</script>

<style lang="scss" scoped>
</style>
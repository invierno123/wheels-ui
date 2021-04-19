<template>
  <h1>Table 表格示例</h1>
  <Demo :component="Table1Demo"/>
  <Demo :component="Table2Demo"/>
</template>

<script lang="ts">

import Demo from '../Demo.vue';
import Table1Demo from '../demo/table/Table1.demo.vue';

import Table2Demo from '../demo/table/Table2.demo.vue';

export default{
  components: {Demo,},
  setup() {
    return {Table1Demo, Table2Demo};
  }
}
</script>

<style lang="scss" scoped>

</style>
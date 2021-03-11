<template>
  <div>
    Tabs示例
  </div>
  <h1>示例1</h1>
  <Tabs>
    <Tab title="nav1">111</Tab>
    <Tab title="nav2">222</Tab>
  </Tabs>
</template>
<script lang="ts">
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';
export default {
  components: {
    Tabs,
    Tab
  }
};
</script>

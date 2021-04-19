<template>
  <div>
    <h1>
      Button示例
    </h1>
    <Demo :component="Button1Demo"/>
    <Demo :component="Button2Demo"/>
    <Demo :component="Button3Demo"/>
    <Demo :component="Button4Demo"/>
    <Demo :component="Button5Demo"/>
  </div>
</template>
<script lang="ts">
import Button1Demo from '../demo/button/Button1.demo.vue';
import Button2Demo from '../demo/button/Button2.demo.vue';
import Button3Demo from '../demo/button/Button3.demo.vue';
import Button4Demo from '../demo/button/Button4.demo.vue';
import Button5Demo from '../demo/button/Button5.demo.vue';
import Demo from '../Demo.vue';

export default {
  components: {
    Demo
  },
  setup() {

    return {Button1Demo, Button2Demo, Button3Demo, Button4Demo, Button5Demo};
  }
};
</script>
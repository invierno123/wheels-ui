<template>
<div>
  Button示例
</div>
  <h1>示例1</h1>
  <div>
    <Button @click="onclick"
    @focus="onclick"
    @mouseover="onclick"
     size="small"
    >你好</Button>
  </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
export default {
components:{Button},
  setup(){
  const onclick=()=>{
    console.log('hi');
  }
  return {onclick}
  }
}
</script>
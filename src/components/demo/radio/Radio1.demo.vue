<demo>
基本用法
</demo>

<template>
  <Radio label="1" v-model:value="labelVal">Radio1</Radio>
  <Radio label="0" v-model:value="labelVal">Radio2</Radio>
  <div class="picked">选择: {{labelVal}}</div>
</template>

<script lang="ts">
import Radio from '../../../lib/Radio.vue';
import {ref} from 'vue';
export default {
  name: 'Radio1Demo',
  components:{Radio},
  setup(){
    const labelVal = ref('1')
    return {labelVal}
  }
};
</script>

<style lang="scss" scoped>
.picked{
  padding: 10px 0;
}
</style>
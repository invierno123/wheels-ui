<demo>
单标签 - 用 label 代替内容
</demo>

<template>
  <Radio label="Radio1" v-model:value="labelVal" />
  <Radio label="Radio2" v-model:value="labelVal" />
  <div class="picked">选择: {{labelVal}}</div>
</template>

<script lang="ts">
import Radio from '../../../lib/Radio.vue';
import {ref} from 'vue';
export default {

  components:{Radio},
  setup(){
    const labelVal = ref('Radio1')
    return {labelVal}
  }
};
</script>

<style lang="scss" scoped>
.picked{
  padding: 10px 0;
}
</style>
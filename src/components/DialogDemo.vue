<template>
  <div>
    Dialog示例
  </div>
  <h1>示例1</h1>
  <div>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x"
          :close-on-click-overlay="false"
          :ok="f1" :cancel="f2"
  >
    <template v-slot:title>
      <strong>具名插槽</strong>
    </template>
    <template v-slot:content>
      <div>123</div>
      <div>456</div>
    </template>

  </Dialog>
    <h1>示例2</h1>
    <Button @click="showDialog">show</Button>
  </div>
</template>
<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';
import {openDialog} from '../lib/openDialog';

export default {
  components: {
    Dialog, Button
  },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {
      console.log(2);
    };
    const showDialog=()=>{
      openDialog({
        title:'标题',
        content:'hello'
      })
    }
    return {
      x, toggle, f1, f2,showDialog
    };
  }

};
</script>
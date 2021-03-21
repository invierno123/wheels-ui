<demo>
支持 level
</demo>
<template>
 <div>
   <div>
     <Button level="main">主要按钮</Button>
     <Button>普通按钮</Button>
     <Button level="danger">危险按钮</Button>
 </div>

 </div>
</template>

<script lang="ts">


import {ref} from 'vue';
import {
  Button
} from "../lib/index";

export default {
  components: {
    Button,
  },


  setup() {
    const bool = ref(false);
    return {bool};
  }
};
</script>


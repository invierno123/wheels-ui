<demo>
支持 level
</demo>
<template>
 <div>
   <div class="button">
     <Button>普通按钮</Button>
     <Button level="main">主要按钮</Button>
     <Button level="success">成功按钮</Button>
     <Button level="warning">警告按钮</Button>
     <Button level="danger">危险按钮</Button>
 </div>
 </div>
</template>

<script lang="ts">


import {ref} from 'vue';
import {
  Button
} from "../../../lib";

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

<style lang="scss">
.button{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  >button{

     margin:4px;
  }
}

</style>
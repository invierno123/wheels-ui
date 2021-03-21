<demo>
支持 size
</demo>
<template>
  <div>
    <div>
      <Button  size="big" >the big one</Button>
      <Button theme="text">normal</Button>
      <Button size="small" theme="link">the small one</Button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Button
} from "../lib/index";

export default {
  components: {
    Button
  },

};
</script>


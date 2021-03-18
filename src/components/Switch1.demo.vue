<template>
  <Switch v-model:value="bool"/>
</template>

<script lang="ts">

import Button from '../lib/Button.vue';
import {ref} from 'vue';
import Switch from '../lib/Switch.vue';

export default {
  components: {
    Switch,
    Button
  },

  setup() {
    const bool = ref(false);
    return {bool};
  }
};
</script>


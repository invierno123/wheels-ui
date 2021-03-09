<template>
<div class="dialog-overlay"></div>
  <div class="dialog-wrapper">
    <header>不太</header>
    <main>
      <p>的方法</p>
      <p>长度</p>
    </main>
    <footer>
      <Button>OK</Button>
      <Button>Cancel</Button>
    </footer>
  </div>
</template>

<script lang="ts">
import Button from './Button.vue';

export default {
  components:{Button}
}
</script>
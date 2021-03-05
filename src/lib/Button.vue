<template>
  <div @mouseover="onMouseover">
    <button v-bind="rest">
      <slot/>
    </button>

  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: false,
  setup(props,context){
    const {onMouseover,...rest}=context.attrs
    return{onMouseover,rest}
  }
};
</script>
<style lang="scss" >

</style>
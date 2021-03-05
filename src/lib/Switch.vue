<template>
  <button class="wheel-switch" :class="{'wheel-checked': value}" @click="toggle"><span></span></button>
</template>
<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.wheel-switch {
  height: $h;
  width: $h*2;
  border: none;
  background: #bfbfbf;
  border-radius: $h/2;
  position: relative;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2/2;
    transition: all 250ms;
  }

  &.wheel-checked {
    background: blue;

    > span {
      left: calc(100% - #{$h2} - 2px)
    }
  }

  &:active {
    > span {
      width: $h2 + 4px;
    }
  }

  &.wheel-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }

  &:focus {
    outline: none;

  }

}
</style>
<script lang="ts">


export default {
  props: {
    value: Boolean
  },
  setup(props, context){
    const toggle = ()=>{
      context.emit('update:value', !props.value)
      // this.$emit()
    }
    return {toggle}
  }
};
</script>

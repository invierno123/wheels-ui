<template>
  <div class="wheel-tabs">
    <div class="wheel-tabs-nav" ref="container">
      <div v-for="(t,index) in titles"
           :key="index"
           :ref="(el)=>{if (t===selected) selectedItem=el}"
           :class="{selected:t===selected}"
           class="wheel-tabs-nav-item "
           @click="select(t)">{{ t }}
      </div>
      <div class="wheel-tabs-nav-line" ref="navLine"></div>
    </div>
    <div class="wheel-tabs-content">
      <component class="wheel-tabs-content-item" :is="current" :key="selected"/>
    </div>
  </div>
</template>
<script lang="ts">

import Tab from './Tab.vue';
import {computed, ref, onMounted, watchEffect, } from 'vue';

export default {
  props: {
    selected: {type: String}
  },
  setup(props, context) {
    const defaults = context.slots.default();

    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签非 Tab');
      }
    });
    const current = computed(() => {
      return defaults.filter((tag) => {
        return tag.props.title === props.selected;
      })[0];
    });//filter返回值是数组
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const selectedItem = ref<HTMLDivElement>(null);
    const navLine = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);

    const select = (title: string) => {
      context.emit('update:selected', title);
    };

    onMounted(() => {

      watchEffect(() => {
        const {
          width
        } = selectedItem.value.getBoundingClientRect();
        navLine.value.style.width = width + 'px';
        const {
          left: left1
        } = container.value.getBoundingClientRect();
        const {
          left: left2
        } = selectedItem.value.getBoundingClientRect();
        const left = left2 - left1;
        navLine.value.style.left = left + 'px';


      },{flush:'post'});

    });

    return {
      defaults, titles, current,
      select, selectedItem, navLine,
      container
    };
  }
};
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.wheel-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-line {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>

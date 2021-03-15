<template>
  <div class="wheel-tabs">
    <div class="wheel-tabs-nav" ref="container">
      <div class="wheel-tabs-nav-item "
           v-for="(t,index) in titles"
           :class="{selected:t===selected}"
           @click="select(t)"
           :ref="el=>{if (el) navItems[index]=el}"
           :key="index">{{ t }}

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
import {computed, ref, onMounted, onUpdated} from 'vue';

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
    const navItems = ref<HTMLDivElement[]>([]);
    const navLine = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);

    const select = (title: string) => {
      context.emit('update:selected', title);
    };
    const publicFunction = () => {
      const divs = navItems.value;
      const result = divs.filter(div => div.classList.contains('selected'))[0];
      const {width} = result.getBoundingClientRect();
      navLine.value.style.width = width + 'px';
      const {left: left1} = container.value.getBoundingClientRect();
      const {left: left2} = result.getBoundingClientRect();
      const left = left2 - left1;
      navLine.value.style.left = left + 'px';
    };
    onMounted(publicFunction);
    onUpdated(publicFunction);
    return {
      defaults, titles, current,
      select, navItems, navLine,
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

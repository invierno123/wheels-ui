<template>
  <section class="topNav">

      <router-link to="/" class="logo">
        <svg class="icon">
          <use xlink:href="#icon-site"></use>
        </svg>
      </router-link>

    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
      <li>
        <a target="_blank" href="https://www.zhihu.com/people/winter-78-67-93">知乎</a>
      </li>
      <li><a target="_blank" href="https://github.com/invierno123">Github</a></li>
    </ul>
    <div v-if="toggleMenuButtonVisible"
    class="toggleAside" @click="toggleMenu" >
    <svg >
    <use xlink:href="#icon-menu"></use>
  </svg>

    </div>


  </section>
</template>
<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  props:{
    toggleMenuButtonVisible:{
      type:Boolean,
      default:false
    }
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>('aside'); // get
    const toggleMenu = () => {
      asideVisible.value = !asideVisible.value;
    };
    return {toggleMenu};
  },
};
</script>
<style lang="scss" scoped>
$color: #007974;
.topNav {
  color: $color;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  background: #fff;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 5px rgb(51 51 51 / 10%);

    > .logo {

      cursor: pointer;
      max-width: 6em;
      margin-right: auto;

      > svg {
        height: 28px;
        width: 28px;
      }
    }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;

    }
  }

  > .toggleAside {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    background: fade-out(black, 0.9);
    svg{
      width: 24px;
      height: 24px;

    }
  }



  @media (max-width: 500px) {

    > .menu {
      display: none;
    }

      > .logo {
        margin: 0 auto;
      }


    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
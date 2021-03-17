<template>
  <div>
    <div class="homePage">
      <TopNav/>
      <div class="banner">
        <h1>轱辘UI</h1>
        <h2>一个厉害的UI框架</h2>
        <p class="actions">
          <a href="https://github.com/invierno123/wheels-ui">
            GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
    <svg class="icon">
      <use xlink:href="#icon-vue"></use>
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-typescript"></use>
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-light"></use>
    </svg>
  </div>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/Topnav.vue';

export default {
  components: {TopNav}
};
</script>
<style lang="scss" scoped>
$green: #02bcb0;
$color: #007974;
.homePage {
  background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
}
.features{
  >svg{
    width: 64px;
    height: 64px;
  }
}
.banner {
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: 4px;

      &:hover {
        text-decoration: none;
      }
    }

  }
}
</style>

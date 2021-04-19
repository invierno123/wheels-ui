<template>
  <div class="layout">
    <TopNav :toggle-menu-button-visible="true" class="nav" />
    <div class="content">
      <aside :class="{visible: asideVisible}">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 开关</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 弹出框</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 标签页</router-link>
          </li>
          <li>
            <router-link to="/doc/input">Input 输入框</router-link>
          </li>
          <li>
            <router-link to="/doc/radio">Radio 单选框</router-link>
          </li>
          <li>
            <router-link to="/doc/table">Table 表格</router-link>
          </li>
          <li>
            <router-link to="/doc/update">未完待续...</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import TopNav from "../components/Topnav.vue";
import { inject, Ref } from "vue";
export default {
  components: { TopNav },
  setup() {
    const asideVisible = inject<Ref<boolean>>("aside"); // get
    return { asideVisible };
  },
};
</script>
<style lang="scss" scoped>
$aside-index:10;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;

    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}
aside {
  background: white;
  width: 260px;
  position: fixed;
  border-right: 1px solid #e8e8e8;
  box-shadow: 5px 0 5px rgba(51 51 51  / 10%);
  z-index: $aside-index;
  top: 0;
  left: 0;
  padding: 70px 0 60px;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  > h2 {
    margin-bottom: 4px;
    font-size: 18px;
    line-height: 22px;
    font-weight:600;
    padding:10px;
  }
  > ol {
    > li {

      >a{
        display: inline-block;
        width: 100%;
        padding: 8px 16px;
        text-decoration: none;
        position: relative;
        &:hover {
          background: #e5f2fa;
          border-bottom: none;
        }

      }
      .router-link-active{

        background: #e5f2fa;
        &:after{
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          border-right: 3px solid  deepskyblue;
        }


      }

    }
  }
}
main {
  margin-left: 120px;
  overflow: auto;
}

@media (max-width: 500px) {
  .layout {
    > .content {
      padding-left: 0;
      > aside {
        width: 180px;
        background-color: #fff;
        transition: all 0.25s ease;
        transform: translateX(-200px);
        &.visible {
          transform: translateX(0px);
        }
      }
      main {
        overflow: auto;
        padding: 20px 8px;
        margin: 0 auto;
      }
    }
  }}

</style>
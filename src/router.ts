//@ts-nocheck
import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/routerDemo/SwitchDemo.vue';
import ButtonDemo from './components/routerDemo/ButtonDemo.vue';
import DialogDemo from './components/routerDemo/DialogDemo.vue';
import TabsDemo from './components/routerDemo/TabsDemo.vue';
import intro from './markdown/intro.md';
import getStarted from './markdown/get-started.md';
import install from './markdown/install.md';
import InputDemo from './components/routerDemo/InputDemo.vue';
import RadioDemo from './components/routerDemo/RadioDemo.vue';
import TableDemo from './components/routerDemo/TableDemo.vue';
import UpdateDemo from './components/routerDemo/UpdateDemo.vue';
import {h} from 'vue';
import Markdown from './components/routerDemo/Markdown.vue';

const history = createWebHashHistory();

const md = string => h(Markdown, {content: string, key: string});
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc, children: [
        {path: '', redirect: '/doc/intro'},
        {path: 'intro', component: md(intro)},
        {path: 'get-started', component: md(getStarted)},
        {path: 'install', component: md(install)},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo},
        {path: 'input', component: InputDemo},
        {path: 'radio', component: RadioDemo},
        {path: 'table', component: TableDemo},
        {path: 'update', component: UpdateDemo},
      ]
    }
  ]
});
router.afterEach(() => {
  console.log('路由切换了');
});
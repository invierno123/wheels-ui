import './lib/wheel.scss';
import {createApp} from 'vue';
import App from './App.vue';
import './index.scss';
import {router} from './router';
import 'github-markdown-css';
import Markdown from './components/routerDemo/Markdown.vue';
import './assets/svg.js';

const app = createApp(App);
app.use(router);
app.mount('#app');
app.component('Markdown', Markdown);

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// Vite 專用路徑
// import 'font-awesome/css/font-awesome.min.css';
// ✅ 新增以下兩行
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

// createApp(App).use(router).mount('#app');
// ✅ 建立 app 並載入 Arco + Router
const app = createApp(App);
app.use(router);
app.use(ArcoVue); // 🔥 關鍵！讓 <a-*> 元件能渲染
app.mount('#app');

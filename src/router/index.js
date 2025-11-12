import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/Home.vue';
import Feature from '../pages/Feature.vue';
import Problems from '../pages/Problems.vue';
import Services from '../pages/Services.vue';
import FAQ from '../pages/FAQ.vue';
import Cases from '../pages/Cases.vue';
import Pricing from '../pages/Pricing.vue';
import About from '../pages/About.vue';
import Contact from '../pages/Contact.vue';
import Pallet from '../pages/Pallet.vue';
import TmsResult from '@/pages/TmsResult.vue';

import Problems1 from '../pages/Problems1.vue';
import Problems2 from '../pages/Problems2.vue';
import Problems3 from '../pages/Problems3.vue';
import Problems4 from '../pages/Problems4.vue';
import Problems5 from '../pages/Problems5.vue';

// 対応可能な業務
import Services1 from '../pages/Services1.vue';
import Services2 from '../pages/Services2.vue';
import Services3 from '../pages/Services3.vue';
import Services4 from '../pages/Services4.vue';
import Services5 from '../pages/Services5.vue';
import Services6 from '../pages/Services6.vue';
import Services7 from '../pages/Services7.vue';
import Services8 from '../pages/Services8.vue';
import Services9 from '../pages/Services9.vue';
import Services10 from '../pages/Services10.vue';
import Services11 from '../pages/Services11.vue';

// 底部頁面
import Privacy from '../pages/Privacy.vue';
import Resources from '../pages/Resources.vue';

const routes = [
  { path: '/home', component: Home },
  { path: '/feature', component: Feature },
  { path: '/problems', component: Problems },
  { path: '/services', component: Services },
  { path: '/faq', component: FAQ },
  { path: '/cases', component: Cases },
  { path: '/pricing', component: Pricing },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/pallet', component: Pallet },
  { path: '/result', component: TmsResult, name: 'TmsResult' },

  { path: '/', redirect: '/home' }, // 預設首頁跳轉到特長

  // 解決できる課題
  { path: '/problems1', component: Problems1 },
  { path: '/problems2', component: Problems2 },
  { path: '/problems3', component: Problems3 },
  { path: '/problems4', component: Problems4 },
  { path: '/problems5', component: Problems5 },

  // 対応可能な業務
  { path: '/services1', component: Services1 },
  { path: '/services2', component: Services2 },
  { path: '/services3', component: Services3 },
  { path: '/services4', component: Services4 },
  { path: '/services5', component: Services5 },
  { path: '/services6', component: Services6 },
  { path: '/services7', component: Services7 },
  { path: '/services8', component: Services8 },
  { path: '/services9', component: Services9 },
  { path: '/services10', component: Services10 },
  { path: '/services11', component: Services11 },

  // 底部頁面
  { path: '/privacy', component: Privacy },
  { path: '/resources', component: Resources },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 如果有 savedPosition (返回上一頁)，則滾動到保存位置
    if (savedPosition) {
      return savedPosition;
    } else {
      // 每次跳轉都回到頁面頂部
      return { top: 0 };
    }
  },
});

export default router;

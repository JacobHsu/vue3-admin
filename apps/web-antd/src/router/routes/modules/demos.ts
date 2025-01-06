import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout, IFrameView } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'ic:baseline-view-in-ar',
      keepAlive: true,
      order: 1000,
      title: $t('demos.title'),
    },
    name: 'Demos',
    path: '/demos',
    children: [
      {
        name: 'TradingviewDemo',
        path: '/demos/outside/iframe/tradingview',
        component: IFrameView,
        meta: {
          icon: 'devicon:vuejs',
          iframeSrc: 'https://jacobhsu.github.io/vue-tradingview-widget',
          title: 'Tradingview',
        },
      },
      // {
      //   name: 'TailwindcssDemo',
      //   path: '/demos/outside/iframe/tailwindcss',
      //   component: IFrameView,
      //   meta: {
      //     icon: 'devicon:tailwindcss',
      //     iframeSrc: 'https://tailwindcss.com/',
      //     title: 'Tailwindcss',
      //   },
      // },
      {
        meta: {
          title: $t('demos.antd'),
        },
        name: 'AntDesignDemos',
        path: '/demos/ant-design',
        component: () => import('#/views/demos/antd/index.vue'),
      },
    ],
  },
];

export default routes;

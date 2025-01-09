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
      {
        name: 'TradingviewKlinechartDemo',
        path: '/demos/outside/iframe/klinechart',
        component: IFrameView,
        meta: {
          icon: 'devicon:html5',
          iframeSrc: 'https://jacobhsu.github.io/stock-klinechart',
          title: 'VDE chart',
        },
      },
    ],
  },
];

export default routes;

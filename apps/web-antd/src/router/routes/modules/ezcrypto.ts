import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout, IFrameView } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'mdi:coin',
      keepAlive: true,
      order: 1000,
      title: $t('page.crypto.title'),
    },
    name: 'Crypto',
    path: '/crypto',
    children: [
      {
        name: 'TvWidgetsDemo',
        path: '/crypto/outside/iframe/tvwidgets',
        component: IFrameView,
        meta: {
          icon: 'cryptocurrency:chain',
          iframeSrc: 'https://jacobhsu.github.io/tradingview-widgets',
          title: 'widgets',
        },
      },
      {
        name: 'ETH',
        path: '/crypto/outside/iframe/eth',
        component: IFrameView,
        meta: {
          icon: 'cryptocurrency:eth',
          iframeSrc: 'https://jacobhsu.github.io/altfins-widgets/',
          title: 'ETH',
        },
      },
      {
        name: 'SOL',
        path: '/crypto/outside/iframe/sol',
        component: IFrameView,
        meta: {
          icon: 'cryptocurrency:sol',
          iframeSrc: 'https://jacobhsu.github.io/altfins-widgets/SOL',
          title: 'SOL',
        },
      },
    ],
  },
];

export default routes;

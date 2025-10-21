import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout, IFrameView } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'mdi:chart-line',
      keepAlive: true,
      order: 999,
      title: $t('page.stock.title'),
    },
    name: 'Stock',
    path: '/stock',
    children: [
      {
        name: 'OpenStock',
        path: '/demos/outside/iframe/usstock',
        component: IFrameView,
        meta: {
          icon: 'uis:chart',
          iframeSrc: 'https://next-open-stock.vercel.app/',
          title: 'OpenStock',
        },
      },
      {
        name: 'stockbot',
        path: '/demos/outside/iframe/stockbot',
        component: IFrameView,
        meta: {
          icon: 'hugeicons:chat-01',
          iframeSrc: 'https://stockbot-jade.vercel.app',
          title: 'stockbot',
        },
      },
    ],
  },
];

export default routes;

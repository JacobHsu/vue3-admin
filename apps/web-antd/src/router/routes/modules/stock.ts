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
          iframeSrc: 'https://stockbot-groq-chat.vercel.app/',
          title: 'stockbot',
        },
      },
      {
        name: 'macromicro',
        path: '/demos/outside/iframe/macromicro',
        component: IFrameView,
        meta: {
          icon: 'fa6-solid:mountain-sun',
          iframeSrc: 'https://www.macromicro.me/etf/',
          title: 'macromicro',
        },
      },
    ],
  },
];

export default routes;

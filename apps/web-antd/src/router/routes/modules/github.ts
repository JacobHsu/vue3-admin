import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout, IFrameView } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'mdi:github',
      keepAlive: true,
      order: 1000,
      title: $t('source.title'),
    },
    name: 'Source ',
    path: '/source',
    children: [
      {
        name: 'OpenStock',
        path: '/vben-admin/openstock',
        component: IFrameView,
        meta: {
          icon: 'mdi:github',
          link: 'https://github.com/JacobHsu/next-open-stock',
          title: 'OpenStock',
        },
      },
      {
        name: 'CryptoWatch',
        path: '/vben-admin/cryptowatch',
        component: IFrameView,
        meta: {
          icon: 'mdi:github',
          link: 'https://github.com/JacobHsu/crypto-watch',
          title: 'CryptoWatch',
        },
      },
    ],
  },
];

export default routes;

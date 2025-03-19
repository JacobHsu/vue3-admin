import type { RouteRecordRaw } from 'vue-router';

import { GITHUB_URL, GITHUB_URL_CHROME_EXTENSIONS } from '@vben/constants';

import { BasicLayout, IFrameView } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'ion:layers-outline',
      keepAlive: true,
      order: 1000,
      title: $t('examples.title'),
    },
    name: 'Examples',
    path: '/examples',
    children: [
      {
        name: 'Automa',
        path: '/vben-admin/github',
        component: IFrameView,
        meta: {
          icon: 'mdi:github',
          link: GITHUB_URL,
          title: 'Automa',
        },
      },
      {
        name: 'Chrome extensions',
        path: '/vben-admin/github',
        component: IFrameView,
        meta: {
          icon: 'mdi:github',
          link: GITHUB_URL_CHROME_EXTENSIONS,
          title: 'Chrome extensions',
        },
      },
    ],
  },
];

export default routes;

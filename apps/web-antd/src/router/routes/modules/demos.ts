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
      {
        name: 'kospi',
        path: '/demos/outside/iframe/kospi',
        component: IFrameView,
        meta: {
          icon: 'devicon:chrome',
          iframeSrc:
            'https://www.cnyes.com/global/astock/html5chart.aspx?area=KR&code=KOSPI',
          title: 'kospi',
        },
      },
      {
        name: 'shipping',
        path: '/demos/outside/iframe/shipping',
        component: IFrameView,
        meta: {
          icon: 'devicon:googlecloud',
          iframeSrc:
            'https://docs.google.com/spreadsheets/d/e/2PACX-1vQyuk30N4qW79BNOpBJrJYXuxc80L8Wsraj4JALpVlcg947Od4Yo1NJhYZTOkRMZxTbQOSIWKvuaZEs/pubhtml?gid=0&single=true',
          title: 'shipping',
        },
      },
      {
        name: 'plastics',
        path: '/demos/outside/iframe/plastics',
        component: IFrameView,
        meta: {
          icon: 'devicon:googlecloud',
          iframeSrc:
            'https://docs.google.com/spreadsheets/d/e/2PACX-1vQyuk30N4qW79BNOpBJrJYXuxc80L8Wsraj4JALpVlcg947Od4Yo1NJhYZTOkRMZxTbQOSIWKvuaZEs/pubhtml?gid=2054590742&single=true',
          title: 'plastics',
        },
      },
    ],
  },
];

export default routes;

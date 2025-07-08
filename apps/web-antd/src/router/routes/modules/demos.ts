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
        name: 'stockbot',
        path: '/demos/outside/iframe/stockbot',
        component: IFrameView,
        meta: {
          icon: 'devicon:openapi',
          iframeSrc: 'https://stockbot-jade.vercel.app',
          title: 'stockbot',
        },
      },
      {
        name: 'histock',
        path: '/demos/outside/iframe/histock',
        component: IFrameView,
        meta: {
          icon: 'devicon:codepen',
          iframeSrc: 'https://codepen.io/JacobHsu/full/WbNYVay',
          title: 'Stock Index',
        },
      },
      {
        name: 'heatmap',
        path: '/demos/outside/iframe/heatmap',
        component: IFrameView,
        meta: {
          icon: 'devicon:minitab',
          iframeSrc: 'https://www.nstock.tw/market_index/heatmap',
          title: 'heatmap',
        },
      },
      {
        name: 'industry',
        path: '/demos/outside/iframe/finlab',
        component: IFrameView,
        meta: {
          icon: 'devicon:minitab',
          iframeSrc: 'https://ai.finlab.tw/industry',
          title: 'industry',
        },
      },
      {
        name: 'day-trading',
        path: '/demos/outside/iframe/day-trading',
        component: IFrameView,
        meta: {
          icon: 'devicon:chrome',
          iframeSrc: 'https://histock.tw/stock/rank.aspx?m=4&d=0&t=dt',
          title: 'day-trading',
        },
      },
      {
        name: 'ranking',
        path: '/demos/outside/iframe/ranking',
        component: IFrameView,
        meta: {
          icon: 'devicon:chrome',
          iframeSrc: 'https://www.cnyes.com/twstock/ranking2.aspx',
          title: 'ranking',
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
        name: 'twse',
        path: '/demos/outside/iframe/twse',
        component: IFrameView,
        meta: {
          icon: 'devicon:googlecloud',
          iframeSrc:
            'https://docs.google.com/spreadsheets/d/e/2PACX-1vTN9WgNr0blAuxt4eHenoVe7ea5gSSapy0JnNWQ1ymkTczwbvGO0xKgO51ouw6_pdoAT-cHR8CD6MuQ/pubhtml?gid=0&single=true',
          title: ' TWSE',
        },
      },
      {
        name: 'etfs',
        path: '/demos/outside/iframe/etfs',
        component: IFrameView,
        meta: {
          icon: 'devicon:googlecloud',
          iframeSrc:
            'https://docs.google.com/spreadsheets/d/e/2PACX-1vQyuk30N4qW79BNOpBJrJYXuxc80L8Wsraj4JALpVlcg947Od4Yo1NJhYZTOkRMZxTbQOSIWKvuaZEs/pubhtml?gid=1066999246&single=true',
          title: 'etfs',
        },
      },
    ],
  },
];

export default routes;

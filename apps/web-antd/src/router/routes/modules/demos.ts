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
        name: 'TradingviewDemo',
        path: '/demos/outside/iframe/tradingview',
        component: IFrameView,
        meta: {
          icon: 'devicon:react',
          iframeSrc: 'https://react-tradingview-widgets.vercel.app',
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

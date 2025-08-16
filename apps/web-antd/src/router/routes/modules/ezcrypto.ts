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
        name: 'TradingviewSignal',
        path: '/demos/outside/iframe/signal',
        component: IFrameView,
        meta: {
          icon: 'material-symbols:cardiology-rounded',
          iframeSrc: 'https://crypto-tv-signal.lovable.app/',
          title: 'Tv Signal',
        },
      },
      {
        name: 'TradingviewDemo',
        path: '/demos/outside/iframe/tradingview',
        component: IFrameView,
        meta: {
          icon: 'cryptocurrency:bab',
          iframeSrc: 'https://react-tradingview-widgets.vercel.app',
          title: 'Tradingview',
        },
      },
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
        name: 'BTC',
        path: '/crypto/outside/iframe/btc',
        component: IFrameView,
        meta: {
          icon: 'cryptocurrency:btc',
          iframeSrc: 'https://jacobhsu.github.io/altfins-widgets/BTC',
          title: 'BTC',
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
      {
        name: 'DOGE',
        path: '/crypto/outside/iframe/doge',
        component: IFrameView,
        meta: {
          icon: 'cryptocurrency:doge',
          iframeSrc: 'https://jacobhsu.github.io/altfins-widgets/DOGE',
          title: 'DOGE',
        },
      },
      {
        name: 'Weekly Calendar',
        path: '/crypto/outside/iframe/calendar',
        component: IFrameView,
        meta: {
          icon: 'ic:baseline-calendar-month',
          iframeSrc: 'https://crypto-weekly-calendar.lovable.app/',
          title: 'Weekly Calendar',
        },
      },
      {
        name: 'Coinglass',
        path: '/crypto/outside/iframe/coinglass',
        component: IFrameView,
        meta: {
          icon: 'https://cdn.coinglasscdn.com/static/icon_200.png',
          iframeSrc: 'https://www.coinglass.com/tv/zh-TW/Binance_ETHUSDT',
          title: 'Coinglass',
        },
      },
    ],
  },
];

export default routes;

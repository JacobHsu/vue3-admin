import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout, IFrameView } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'lineicons:btc',
      keepAlive: true,
      order: 1000,
      title: $t('page.crypto.title'),
    },
    name: 'Crypto',
    path: '/crypto',
    children: [
      {
        name: 'CryptoWatch',
        path: '/demos/outside/iframe/cryptowatch',
        component: IFrameView,
        meta: {
          icon: 'cryptocurrency:cix',
          iframeSrc: 'https://jacobhsu.github.io/crypto-watch/',
          title: 'Crypto Watch BB',
        },
      },
      {
        name: 'CryptoWatchMa',
        path: '/demos/outside/iframe/cryptowatchma',
        component: IFrameView,
        meta: {
          icon: 'cryptocurrency:blcn',
          iframeSrc: 'https://jacobhsu.github.io/crypto-watch/ma',
          title: 'Crypto Watch',
        },
      },
      {
        name: 'CryptoWatchEma',
        path: '/demos/outside/iframe/cryptowatchema',
        component: IFrameView,
        meta: {
          icon: 'la:chart-line',
          iframeSrc: 'https://jacobhsu.github.io/crypto-watch/ema',
          title: 'Crypto Watch EMA',
        },
      },
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
        name: 'OpenStockCrypto',
        path: '/demos/outside/iframe/usstockcrypto',
        component: IFrameView,
        meta: {
          icon: 'uis:chart',
          iframeSrc: 'https://next-open-stock.vercel.app/crypto',
          title: 'OpenStockCrypto',
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
        name: 'rainbow',
        path: '/crypto/outside/iframe/rainbow',
        component: IFrameView,
        meta: {
          icon: 'emojione:rainbow',
          iframeSrc: 'https://charts.bitbo.io/rainbow/',
          title: 'Rainbow Chart',
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
        name: 'Daily Chart',
        path: '/crypto/outside/iframe/dailychart',
        component: IFrameView,
        meta: {
          icon: 'solar:chart-2-bold-duotone',
          iframeSrc: 'https://crypto-daily-log.lovable.app/',
          title: 'Daily Chart',
        },
      },
      {
        name: 'Maxpain',
        path: '/crypto/outside/iframe/maxpain',
        component: IFrameView,
        meta: {
          icon: 'https://cdn.coinglasscdn.com/static/icon_200.png',
          iframeSrc: 'https://www.coinglass.com/zh-TW/liquidation-maxpain',
          title: 'Maxpain',
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

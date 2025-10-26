<script lang="ts" setup>
import type { NotificationItem } from '@vben/layouts';

import { computed, ref, watch } from 'vue';

import { AuthenticationLoginExpiredModal } from '@vben/common-ui';
import { JACOB_GITHUB_URL } from '@vben/constants';
import { useWatermark } from '@vben/hooks';
import { MdiGithub } from '@vben/icons';
import {
  BasicLayout,
  LockScreen,
  Notification,
  UserDropdown,
} from '@vben/layouts';
import { preferences } from '@vben/preferences';
import { useAccessStore, useUserStore } from '@vben/stores';
import { openWindow } from '@vben/utils';

import { useAuthStore } from '#/store';
import LoginForm from '#/views/_core/authentication/login.vue';

const notifications = ref<NotificationItem[]>([
  {
    avatar: 'https://avatar.vercel.sh/1',
    date: '刚刚',
    isRead: false,
    message: 'Stock Screener',
    title: 'FINVIZ.com World',
    url: 'https://finviz.com/map.ashx?t=geo',
  },
  {
    avatar: 'https://www.dianomi.com/img/a/sav2/222436/9/110x70.jpg',
    date: '刚刚',
    isRead: false,
    message: 'ETF Screener',
    title: 'FINVIZ.com ETF',
    url: 'https://finviz.com/map.ashx?t=etf',
  },
  {
    avatar: 'https://www.macromicro.me/img/etf/intro.png',
    date: '刚刚',
    isRead: false,
    message: 'ETF Screener',
    title: 'Macromicro ETF US',
    url: 'https://www.macromicro.me/etf/us/screener',
  },
  {
    avatar: 'https://cryptowatch.net/images/darkLogo.png',
    date: '刚刚',
    isRead: false,
    message: 'Multiple TradingView Charts in 1 Screen',
    title: 'CryptoWatch',
    url: 'https://cryptowatch.net/',
  },
  {
    avatar: 'https://avatar.vercel.sh/2',
    date: '刚刚',
    isRead: false,
    message: 'Google Finance beta',
    title: 'Google Finance',
    url: 'https://www.google.com/finance/beta/',
  },
]);

const userStore = useUserStore();
const authStore = useAuthStore();
const accessStore = useAccessStore();
const { destroyWatermark, updateWatermark } = useWatermark();
const showDot = computed(() =>
  notifications.value.some((item) => !item.isRead),
);

const menus = computed(() => [
  {
    handler: () => {
      openWindow(JACOB_GITHUB_URL, {
        target: '_blank',
      });
    },
    icon: MdiGithub,
    text: 'GitHub',
  },
]);

const avatar = computed(() => {
  return userStore.userInfo?.avatar ?? preferences.app.defaultAvatar;
});

async function handleLogout() {
  await authStore.logout(false);
}

function handleNoticeClear() {
  notifications.value = [];
}

function handleMakeAll() {
  notifications.value.forEach((item) => (item.isRead = true));
}
watch(
  () => preferences.app.watermark,
  async (enable) => {
    if (enable) {
      await updateWatermark({
        content: `${userStore.userInfo?.username}`,
      });
    } else {
      destroyWatermark();
    }
  },
  {
    immediate: true,
  },
);
</script>

<template>
  <BasicLayout @clear-preferences-and-logout="handleLogout">
    <template #user-dropdown>
      <UserDropdown
        :avatar
        :menus
        :text="userStore.userInfo?.realName"
        description="jacob.hsu.tw@gmail.com"
        tag-text="Pro"
        @logout="handleLogout"
      />
    </template>
    <template #notification>
      <Notification
        :dot="showDot"
        :notifications="notifications"
        @clear="handleNoticeClear"
        @make-all="handleMakeAll"
      />
    </template>
    <template #extra>
      <AuthenticationLoginExpiredModal
        v-model:open="accessStore.loginExpired"
        :avatar
      >
        <LoginForm />
      </AuthenticationLoginExpiredModal>
    </template>
    <template #lock-screen>
      <LockScreen :avatar @to-login="handleLogout" />
    </template>
  </BasicLayout>
</template>

import type { ClassType } from '@vben-core/typings';

import type { DrawerApi } from './drawer-api';

import type { Component, Ref } from 'vue';

export type DrawerPlacement = 'bottom' | 'left' | 'right' | 'top';

export interface DrawerProps {
  /**
   * 取消按钮文字
   */
  cancelText?: string;
  class?: ClassType;
  /**
   * 是否显示右上角的关闭按钮
   * @default true
   */
  closable?: boolean;
  /**
   * 点击弹窗遮罩是否关闭弹窗
   * @default true
   */
  closeOnClickModal?: boolean;
  /**
   * 按下 ESC 键是否关闭弹窗
   * @default true
   */
  closeOnPressEscape?: boolean;
  /**
   * 确定按钮 loading
   * @default false
   */
  confirmLoading?: boolean;
  /**
   * 确定按钮文字
   */
  confirmText?: string;
  contentClass?: string;
  /**
   * 弹窗描述
   */
  description?: string;
  /**
   * 是否显示底部
   * @default true
   */
  footer?: boolean;
  /**
   * 弹窗底部样式
   */
  footerClass?: ClassType;
  /**
   * 是否显示顶栏
   * @default true
   */
  header?: boolean;
  /**
   * 弹窗头部样式
   */
  headerClass?: ClassType;

  /**
   * 弹窗是否显示
   * @default false
   */
  loading?: boolean;
  /**
   * 是否显示遮罩
   * @default true
   */
  modal?: boolean;
  /**
   * 是否自动聚焦
   */
  openAutoFocus?: boolean;

  /**
   * 抽屉位置
   * @default right
   */
  placement?: DrawerPlacement;
  /**
   * 是否显示取消按钮
   * @default true
   */
  showCancelButton?: boolean;
  /**
   * 是否显示确认按钮
   * @default true
   */
  showConfirmButton?: boolean;
  /**
   * 弹窗标题
   */
  title?: string;
  /**
   * 弹窗标题提示
   */
  titleTooltip?: string;
}

export interface DrawerState extends DrawerProps {
  /** 弹窗打开状态 */
  isOpen?: boolean;
  /**
   * 共享数据
   */
  sharedData?: Record<string, any>;
}

export type ExtendedDrawerApi = {
  useStore: <T = NoInfer<DrawerState>>(
    selector?: (state: NoInfer<DrawerState>) => T,
  ) => Readonly<Ref<T>>;
} & DrawerApi;

export interface DrawerApiOptions extends DrawerState {
  /**
   * 独立的弹窗组件
   */
  connectedComponent?: Component;
  /**
   * 关闭前的回调，返回 false 可以阻止关闭
   * @returns
   */
  onBeforeClose?: () => void;
  /**
   * 点击取消按钮的回调
   */
  onCancel?: () => void;
  /**
   * 点击确定按钮的回调
   */
  onConfirm?: () => void;
  /**
   * 弹窗状态变化回调
   * @param isOpen
   * @returns
   */
  onOpenChange?: (isOpen: boolean) => void;
}

/**
 * @zh_TW 登入頁面路徑
 */
export const LOGIN_PATH = '/auth/login';

/**
 * @zh_TW 預設首頁路徑
 */
export const DEFAULT_HOME_PATH = '/demos';

export interface LanguageOption {
  label: string;
  value: 'en-US' | 'zh-CN' | 'zh-TW';
}

/**
 * Supported languages
 */
export const SUPPORT_LANGUAGES: LanguageOption[] = [
  {
    label: '繁體中文',
    value: 'zh-TW',
  },
  {
    label: '简体中文',
    value: 'zh-CN',
  },
  {
    label: 'English',
    value: 'en-US',
  },
];

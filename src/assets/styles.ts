// NOTE: 基本的にはこちらの定数は使わずに、@/config/theme配下のスタイルをProvider経由で使用する
// 徐々に既存の参照ファイルをthemeに置き換えていくので、ファイルとしては残しておく
export const COLORS = {
  PRIMARY: '#111111',
  BLACK_DARK_1: '#4D4D4D',
  BLACK_DARK_2: '#636363',
  BLACK_LIGHT: '#ADADAD',
  ERROR_DARK: '#B00020',
  SUCCESS_DARK: '#6FCF97',
  GRAY_DARK: '#D9D9D9',
  GRAY_LIGHT: '#ECEDEF',
  BLUE_DARK: '#71A7E4',
  BLUE_LIGHT: '#007AFF',
  WHITE: '#ffffff',
  OVERLAY: 'rgba(0, 0, 0, 0.5)',
} as const;

export const FONT_SIZE = {
  FS_8: '8px',
  FS_10: '10px',
  FS_12: '12px',
  FS_13: '13px',
  BASE_FONT_SIZE: '14px',
  FS_15: '15px',
  FS_16: '16px',
  FS_18: '18px',
  FS_20: '20px',
  FS_21: '21px',
  FS_24: '24px',
  FS_26: '26px',
  FS_30: '30px',
} as const;

export const Z_INDEX = {
  20: '20',
  30: '30',
  40: '40',
  50: '50',
  60: '60',
} as const;

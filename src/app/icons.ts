import type { IconifyIcon } from '@iconify/types';
import home from '@iconify/icons-mdi/home';
import groupAdd from '@iconify/icons-mdi/group-add';
import bellSlash from '@iconify/icons-fa-solid/bell-slash';

// @ts-ignore
export const appIcons = {
  home,
  'group-add': groupAdd,
  'bell-slash': bellSlash
} as { [name: string]: IconifyIcon };

/* eslint-disable no-param-reassign */
/** 默认展示接口下发的第一个菜单  */
import { Navigate } from 'react-router-dom';
import NoAuthority from '@/pages/403';
import user from '@/store/user';
import { useStore } from 'react-core-form-store';

// 查找指定key
export const recursionFind = (menus: any, path: string) => {
  const targetMenu: any = { menu: {} };
  recursionLoopFind(menus, path, targetMenu);
  return targetMenu.menu;
};

// 递归查找指定key
export const recursionLoopFind = (menus: any, path: string, currentMenu) => {
  for (let i = 0; i < menus.length; i++) {
    const item = menus[i];
    if (item.path === path) {
      currentMenu.menu = item;
      break;
    } else if (item.children) {
      recursionLoopFind(item.children, path, currentMenu);
    }
  }
};

export default () => (props) => {
  const { path } = props.match;
  const { menus }: any = useStore(user);
  const { children } = recursionFind(
    menus,
    path === '/' ? menus[0]?.path : path,
  );
  if (children?.[0]) {
    return <Navigate to={children[0].path} />;
  } else {
    return <NoAuthority />;
  }
};

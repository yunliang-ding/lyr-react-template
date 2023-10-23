export interface LayoutProps {
  title: string;
  pathname: string;
  navTheme: 'light' | 'dark' | 'realDark';
  status: 'login' | 'loading' | 'error' | 'noPermissions' | 'userDisabled';
  layout: any;
}

const initState: LayoutProps = {
  title: '通用项目模版',
  navTheme: 'light',
  status: 'loading',
  pathname: '',
  // 一级的菜单是位于顶部
  layout: {
    splitMenus: true,
    layout: 'mix',
    fixedHeader: true,
    // collapsedButtonRender: false,
  },
};

export default {
  // 定义 model 的初始 state
  state: {
    ...initState,
  },
  // 定义改变该模型状态的纯函数
  reducers: {
    update(prevState, payload) {
      return {
        ...prevState,
        ...payload,
      };
    },
  },
};

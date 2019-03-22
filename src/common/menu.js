import { isUrl } from '../utils/utils';

const menuData = [
  {
    name: '系统概览',
    icon: 'dashboard',
    path: 'home'
  }
  ,{
    name: '插件列表',
    icon: 'pic-center',
    path: 'plug',
    children: [
      {
        name: 'waf',
        path: 'waf',
      },
      {
        name: 'sign',
        path: 'sign',
      },
      {
        name: 'monitor',
        path: 'monitor',
      },
      {
        name: 'rewrite',
        path: 'rewrite',
      },
      {
        name: 'rate_limiter',
        path: 'limiter',
      },
      {
        name: 'divide',
        path: 'divide',
      },
      {
        name: 'dubbo',
        path: 'dubbo',
      },
      {
        name: 'springCloud',
        path: 'spring',
      },
      {
        name: 'authc',
        path: 'authc',
      },
      {
        name: 'authz',
        path: 'authz',
      },
    ],
  },
  {
    name: '应用管理',
    icon: 'appstore',
    path: 'app_manage',
    children: [
      {
        name: 'APP管理',
        path: 'app',
      },
      {
        name: 'API分组',
        path: 'api_group',
      },
      {
        name: 'API管理',
        path: 'api'
      }
    ],
  },
  {
    name: '系统管理',
    icon: 'setting',
    path: 'system',
    children: [
      {
        name: '用户管理',
        path: 'manage',
      },
      {
        name: '插件管理',
        path: 'plugin',
      },
      {
        name: '认证管理',
        path: 'auth'
      },
      {
        name: 'executor管理',
        path: 'executor'
      }
    ],
  },
];

function formatter(data, parentPath = '/', parentAuthority) {
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);

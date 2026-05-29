export const constantRoute = [
  // 登录
  {
    path: '/',
    component: () => import('@/views/login/index.vue'),
    name: 'Login',
    meta: {
      title: '登录',
      hidden: true,
      icon: 'CirclePlus',
    },
  },

  // 主布局
  {
    path: '/layout',
    component: () => import('@/layout/index.vue'),
    name: 'Layout',
    redirect: '/home',
    meta: {
      title: '',
      hidden: false,
      icon: '',
    },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'Home',
        meta: {
          title: '首页',
          hidden: false,
          icon: 'House',
        },
      },
    ],
  },

  // 数据大屏
  {
    path: '/screen',
    component: () => import('@/views/screen/index.vue'),
    name: 'Screen',
    meta: {
      title: '数据大屏',
      hidden: false,
      icon: 'Odometer',
    },
  },

  // 权限管理
  {
    path: '/acl',
    component: () => import('@/layout/index.vue'),
    name: 'Acl',
    redirect: '/acl/user',
    meta: {
      title: '权限管理',
      hidden: false,
      icon: 'Lock',
    },
    children: [
      {
        path: '/acl/user',
        component: () => import('@/views/acl/User/index.vue'),
        name: 'User',
        meta: {
          title: '用户管理',
          hidden: false,
          icon: 'User',
        },
      },
      {
        path: '/acl/role',
        component: () => import('@/views/acl/Role/index.vue'),
        name: 'Role',
        meta: {
          title: '角色管理',
          hidden: false,
          icon: 'Avatar',
        },
      },
      {
        path: '/acl/permission',
        component: () => import('@/views/acl/Permission/index.vue'),
        name: 'Permission',
        meta: {
          title: '权限管理',
          hidden: false,
          icon: 'Tools',
        },
      },
    ],
  },

  // 商品管理
  {
    path: '/product',
    component: () => import('@/layout/index.vue'),
    name: 'Product',
    redirect: '/product/trademark',
    meta: {
      title: '商品管理',
      hidden: false,
      icon: 'Goods', // 对应购物袋图标，可根据你的组件库自行调整
    },
    children: [
      {
        path: '/product/trademark',
        component: () => import('@/views/product/Trademark/index.vue'),
        name: 'Trademark',
        meta: {
          title: '品牌管理',
          hidden: false,
          icon: 'ShoppingCart', // 对应购物车图标
        },
      },
      {
        path: '/product/attr',
        component: () => import('@/views/product/Attr/index.vue'),
        name: 'Attr',
        meta: {
          title: '属性管理',
          hidden: false,
          icon: 'User', // 对应人像图标
        },
      },
      {
        path: '/product/spu',
        component: () => import('@/views/product/Spu/index.vue'),
        name: 'Spu',
        meta: {
          title: 'SPU管理',
          hidden: false,
          icon: 'Grid', // 对应四宫格图标
        },
      },
      {
        path: '/product/sku',
        component: () => import('@/views/product/Sku/index.vue'),
        name: 'Sku',
        meta: {
          title: 'SKU管理',
          hidden: false,
          icon: 'Grid', // 对应四宫格图标
        },
      },
    ],
  },

  // 404
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: 'NotFound',
    meta: {
      title: '404',
      hidden: true,
      icon: 'CirclePlus',
    },
  },

  // 任意路由
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '任意路由',
      hidden: true,
      icon: 'CirclePlus',
    },
  },
]

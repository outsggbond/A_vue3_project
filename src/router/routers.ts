export const constantRoute = [
  {
    path: '/home',
    component: () => import('@/layout/index.vue'),
    name: 'home',
  },
  {
    //登录前的的路由
    path: '/',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
  },
]

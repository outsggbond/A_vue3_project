import router from './router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import setting from './setting'
import { useUserStore } from './store/modules/user'
import pinia from './store'
nprogress.configure({ showSpinner: false });

const userStore = useUserStore(pinia)

router.beforeEach(async (to, from, next) => {
  document.title = setting.title + '-' + to.meta.title;

  nprogress.start()

  const token = userStore.token
  const username = userStore.username

  // 已登录
  if (token) {
    // 登录页禁止访问
    if (to.path === '/') {
      next('/home')
    } else {
      // 已有用户信息
      if (username) {
        next()
      } else {
        try {
          // 获取用户信息
          await userStore.userInfo()

          next()
        } catch (error) {
          // token失效过期，或者是用户手动修改存储
          userStore.useLogout();
          next({ path: '/', query: { redirect: to.path } })
        }
      }
    }
  }
  // 未登录
  else {
    if (to.path === '/') {
      next()
    } else {
      next({
        path: '/',
        query: {
          redirect: to.path,
        },
      })
    }
  }
})

router.afterEach(() => {
  nprogress.done()
})
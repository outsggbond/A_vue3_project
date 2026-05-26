//创建用户相关仓库
import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user'
//引入接口，获取数据
import type { loginForm, loginResponseData } from '@/api/user/type'
import type { UserState } from './types/type'
//引入操作本地存储的函数
import { setToken, getToken } from '@/utils/token'
//引入常量路由
import { constantRoute } from '@/router/routers'

export const useUserStore = defineStore('User', {
  //小仓库：用户相关数据
  state: (): UserState => {
    return {
      token: getToken(), //  本地存储用户的唯一标识
      menuRouters:constantRoute//存储生成菜单需要得数组
    }
  },
  //计算属性，简化仓库数据，让组件获取仓库数据更加方便
  getters: {},
  //处理异步事件，修改state，逻辑的地方
  actions: {
    //登录
    async userLogin(data: loginForm) {
      const result: loginResponseData = await reqLogin(data)
      if (result.code == 200) {
        this.token = result.data.token
        //登录成功
        //pinia和vuex,存储数据其实是利用js对象
        //要本地化持久化存储
        setToken(result.data.token)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
})

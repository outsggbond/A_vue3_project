//创建用户相关仓库
import { defineStore } from "pinia";
import {reqLogin} from '@/api/user'
//引入接口，获取数据
import type {loginForm} from '@/api/user/type'
export  const useUserStore = defineStore("User", {
    //小仓库：用户相关数据
    state: () => {
    return {
        token:localStorage.getItem("TOKEN"),//  本地存储用户的唯一标识
    }
  },
  //计算属性，简化仓库数据，让组件获取仓库数据更加方便
  getters: {},
  //处理异步事件，修改state，逻辑的地方
  actions: {
    //登录
    async userLogin(data:loginForm){
        const result = await reqLogin(data);
        if(result.code==200){
            this.token=result.data.token;
            console.log('登录成功已经获得token')
            //登录成功
            //pinia和vuex,存储数据其实是利用js对象
            //要本地化持久化存储
            localStorage.setItem("TOKEN",result.data.token);

        }else{

        //登录请求成功200->token
        //登录请求失败:201->登录失败信息
        }
    }
  },
});
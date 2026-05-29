//关于layout组件配置的仓库

import { defineStore } from 'pinia'

const useLayOutsettingStore = defineStore('SettingStore', {
  state: () => {
    return {
      fold: false, //用于控制菜单折叠还是收起控制
      reflesh:false,//用来控制刷新的变量
    }
  },
})

export default useLayOutsettingStore

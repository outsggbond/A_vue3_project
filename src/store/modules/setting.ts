//关于layout组件配置的仓库

import { defineStore } from "pinia";

const useLaOutsettingStore = defineStore('SettingStore', {
    state: () => {
        return {
            fold: false,//用于控制菜单折叠还是收起控制
        }
    }
})

export default useLaOutsettingStore;
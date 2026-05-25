import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'virtual:svg-icons-register'
import router from './router'
import '@/styles/index.scss' //引入自定义插件组件
import gloalComponent from './components'
import pinia from './store'
const app = createApp(App)
app.use(ElementPlus)
app.use(gloalComponent)
app.use(pinia)
app.use(router)
app.mount('#app')

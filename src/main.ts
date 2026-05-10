import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'virtual:svg-icons-register' 
const app = createApp(App)
app.use(ElementPlus)
//引入自定义插件组件
import gloalComponent from './components'
app.use(gloalComponent)
app.mount('#app')


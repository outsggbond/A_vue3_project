import SvgIcon from './SvgIcon/index.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const allGlobalComponent = [SvgIcon]
//对外暴露对象
export default {
  install(app: any) {
    allGlobalComponent.forEach((component) => {
      app.component(component.name, component)
    })
    //将element-plus提供的图标注册为全局组件
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}

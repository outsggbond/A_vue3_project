import SvgIcon from './SvgIcon/index.vue'
const allGlobalComponent = [SvgIcon]
//对外暴露对象
export default {
  install(app: any) {
    allGlobalComponent.forEach((component) => {
      app.component(component.name, component)
    })
  },
}

import { App, Plugin } from 'vue'
import BrIconReturnUpBackOutline from './BrIconReturnUpBackOutline.vue'
import BrIconReturnUpBackSharp from './BrIconReturnUpBackSharp.vue'
import BrIconReturnUpBack from './BrIconReturnUpBack.vue'

export default {
  install(app: App) {
    app.component(BrIconReturnUpBackOutline.name, BrIconReturnUpBackOutline)
    app.component(BrIconReturnUpBackSharp.name, BrIconReturnUpBackSharp)
    app.component(BrIconReturnUpBack.name, BrIconReturnUpBack)
  },
} as Plugin

export {
  BrIconReturnUpBackOutline,
  BrIconReturnUpBackSharp,
  BrIconReturnUpBack,
}

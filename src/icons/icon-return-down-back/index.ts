import { App, Plugin } from 'vue'
import BrIconReturnDownBackOutline from './BrIconReturnDownBackOutline.vue'
import BrIconReturnDownBackSharp from './BrIconReturnDownBackSharp.vue'
import BrIconReturnDownBack from './BrIconReturnDownBack.vue'

export default {
  install(app: App) {
    app.component(BrIconReturnDownBackOutline.name, BrIconReturnDownBackOutline)
    app.component(BrIconReturnDownBackSharp.name, BrIconReturnDownBackSharp)
    app.component(BrIconReturnDownBack.name, BrIconReturnDownBack)
  },
} as Plugin

export {
  BrIconReturnDownBackOutline,
  BrIconReturnDownBackSharp,
  BrIconReturnDownBack,
}

import { App, Plugin } from 'vue'
import BrIconExitOutline from './BrIconExitOutline.vue'
import BrIconExitSharp from './BrIconExitSharp.vue'
import BrIconExit from './BrIconExit.vue'

export default {
  install(app: App) {
    app.component(BrIconExitOutline.name, BrIconExitOutline)
    app.component(BrIconExitSharp.name, BrIconExitSharp)
    app.component(BrIconExit.name, BrIconExit)
  },
} as Plugin

export { BrIconExitOutline, BrIconExitSharp, BrIconExit }

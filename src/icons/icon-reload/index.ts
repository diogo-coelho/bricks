import { App, Plugin } from 'vue'
import BrIconReloadOutline from './BrIconReloadOutline.vue'
import BrIconReloadSharp from './BrIconReloadSharp.vue'
import BrIconReload from './BrIconReload.vue'

export default {
  install(app: App) {
    app.component(BrIconReloadOutline.name, BrIconReloadOutline)
    app.component(BrIconReloadSharp.name, BrIconReloadSharp)
    app.component(BrIconReload.name, BrIconReload)
  },
} as Plugin

export { BrIconReloadOutline, BrIconReloadSharp, BrIconReload }

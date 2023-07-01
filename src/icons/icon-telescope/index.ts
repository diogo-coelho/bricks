import { App, Plugin } from 'vue'
import BrIconTelescopeOutline from './BrIconTelescopeOutline.vue'
import BrIconTelescopeSharp from './BrIconTelescopeSharp.vue'
import BrIconTelescope from './BrIconTelescope.vue'

export default {
  install(app: App) {
    app.component(BrIconTelescopeOutline.name, BrIconTelescopeOutline)
    app.component(BrIconTelescopeSharp.name, BrIconTelescopeSharp)
    app.component(BrIconTelescope.name, BrIconTelescope)
  },
} as Plugin

export { BrIconTelescopeOutline, BrIconTelescopeSharp, BrIconTelescope }

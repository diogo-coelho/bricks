import { App, Plugin } from 'vue'
import BrIconApps from './BrIconApps.vue'
import BrIconAppsOutline from './BrIconAppsOutline.vue'
import BrIconAppsSharp from './BrIconAppsSharp.vue'

export default {
  install(app: App) {
    app.component(BrIconApps.name, BrIconApps)
    app.component(BrIconAppsOutline.name, BrIconAppsOutline)
    app.component(BrIconAppsSharp.name, BrIconAppsSharp)
  },
} as Plugin

export { BrIconApps, BrIconAppsOutline, BrIconAppsSharp }

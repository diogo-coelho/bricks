import { App, Plugin } from 'vue'
import BrIconBrowsersOutline from './BrIconBrowsersOutline.vue'
import BrIconBrowsersSharp from './BrIconBrowsersSharp.vue'
import BrIconBrowsers from './BrIconBrowsers.vue'

export default {
  install(app: App) {
    app.component(BrIconBrowsersOutline.name, BrIconBrowsersOutline)
    app.component(BrIconBrowsersSharp.name, BrIconBrowsersSharp)
    app.component(BrIconBrowsers.name, BrIconBrowsers)
  },
} as Plugin

export { BrIconBrowsersOutline, BrIconBrowsersSharp, BrIconBrowsers }

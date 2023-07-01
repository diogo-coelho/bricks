import { App, Plugin } from 'vue'
import BrIconDesktopOutline from './BrIconDesktopOutline.vue'
import BrIconDesktopSharp from './BrIconDesktopSharp.vue'
import BrIconDesktop from './BrIconDesktop.vue'

export default {
  install(app: App) {
    app.component(BrIconDesktopOutline.name, BrIconDesktopOutline)
    app.component(BrIconDesktopSharp.name, BrIconDesktopSharp)
    app.component(BrIconDesktop.name, BrIconDesktop)
  },
} as Plugin

export { BrIconDesktopOutline, BrIconDesktopSharp, BrIconDesktop }

import { App, Plugin } from 'vue'
import BrIconStopOutline from './BrIconStopOutline.vue'
import BrIconStopSharp from './BrIconStopSharp.vue'
import BrIconStop from './BrIconStop.vue'

export default {
  install(app: App) {
    app.component(BrIconStopOutline.name, BrIconStopOutline)
    app.component(BrIconStopSharp.name, BrIconStopSharp)
    app.component(BrIconStop.name, BrIconStop)
  },
} as Plugin

export { BrIconStopOutline, BrIconStopSharp, BrIconStop }

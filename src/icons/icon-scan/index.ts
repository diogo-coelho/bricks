import { App, Plugin } from 'vue'
import BrIconScanOutline from './BrIconScanOutline.vue'
import BrIconScanSharp from './BrIconScanSharp.vue'
import BrIconScan from './BrIconScan.vue'

export default {
  install(app: App) {
    app.component(BrIconScanOutline.name, BrIconScanOutline)
    app.component(BrIconScanSharp.name, BrIconScanSharp)
    app.component(BrIconScan.name, BrIconScan)
  },
} as Plugin

export { BrIconScanOutline, BrIconScanSharp, BrIconScan }

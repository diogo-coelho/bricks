import { App, Plugin } from 'vue'
import BrIconScanCircleOutline from './BrIconScanCircleOutline.vue'
import BrIconScanCircleSharp from './BrIconScanCircleSharp.vue'
import BrIconScanCircle from './BrIconScanCircle.vue'

export default {
  install(app: App) {
    app.component(BrIconScanCircleOutline.name, BrIconScanCircleOutline)
    app.component(BrIconScanCircleSharp.name, BrIconScanCircleSharp)
    app.component(BrIconScanCircle.name, BrIconScanCircle)
  },
} as Plugin

export { BrIconScanCircleOutline, BrIconScanCircleSharp, BrIconScanCircle }

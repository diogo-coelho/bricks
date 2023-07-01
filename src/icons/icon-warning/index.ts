import { App, Plugin } from 'vue'
import BrIconWarningOutline from './BrIconWarningOutline.vue'
import BrIconWarningSharp from './BrIconWarningSharp.vue'
import BrIconWarning from './BrIconWarning.vue'

export default {
  install(app: App) {
    app.component(BrIconWarningOutline.name, BrIconWarningOutline)
    app.component(BrIconWarningSharp.name, BrIconWarningSharp)
    app.component(BrIconWarning.name, BrIconWarning)
  },
} as Plugin

export { BrIconWarningOutline, BrIconWarningSharp, BrIconWarning }

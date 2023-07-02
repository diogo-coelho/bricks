import { App, Plugin } from 'vue'
import BrIconTextOutline from './BrIconTextOutline.vue'
import BrIconTextSharp from './BrIconTextSharp.vue'
import BrIconText from './BrIconText.vue'

export default {
  install(app: App) {
    app.component(BrIconTextOutline.name, BrIconTextOutline)
    app.component(BrIconTextSharp.name, BrIconTextSharp)
    app.component(BrIconText.name, BrIconText)
  },
} as Plugin

export { BrIconTextOutline, BrIconTextSharp, BrIconText }

import { App, Plugin } from 'vue'
import BrIconCafeOutline from './BrIconCafeOutline.vue'
import BrIconCafeSharp from './BrIconCafeSharp.vue'
import BrIconCafe from './BrIconCafe.vue'

export default {
  install(app: App) {
    app.component(BrIconCafeOutline.name, BrIconCafeOutline)
    app.component(BrIconCafeSharp.name, BrIconCafeSharp)
    app.component(BrIconCafe.name, BrIconCafe)
  },
} as Plugin

export { BrIconCafeOutline, BrIconCafeSharp, BrIconCafe }

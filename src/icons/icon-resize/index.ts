import { App, Plugin } from 'vue'
import BrIconResizeOutline from './BrIconResizeOutline.vue'
import BrIconResizeSharp from './BrIconResizeSharp.vue'
import BrIconResize from './BrIconResize.vue'

export default {
  install(app: App) {
    app.component(BrIconResizeOutline.name, BrIconResizeOutline)
    app.component(BrIconResizeSharp.name, BrIconResizeSharp)
    app.component(BrIconResize.name, BrIconResize)
  },
} as Plugin

export { BrIconResizeOutline, BrIconResizeSharp, BrIconResize }

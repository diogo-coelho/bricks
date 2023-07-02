import { App, Plugin } from 'vue'
import BrIconCopyOutline from './BrIconCopyOutline.vue'
import BrIconCopySharp from './BrIconCopySharp.vue'
import BrIconCopy from './BrIconCopy.vue'

export default {
  install(app: App) {
    app.component(BrIconCopyOutline.name, BrIconCopyOutline)
    app.component(BrIconCopySharp.name, BrIconCopySharp)
    app.component(BrIconCopy.name, BrIconCopy)
  },
} as Plugin

export { BrIconCopyOutline, BrIconCopySharp, BrIconCopy }

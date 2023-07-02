import { App, Plugin } from 'vue'
import BrIconClipboardOutline from './BrIconClipboardOutline.vue'
import BrIconClipboardSharp from './BrIconClipboardSharp.vue'
import BrIconClipboard from './BrIconClipboard.vue'

export default {
  install(app: App) {
    app.component(BrIconClipboardOutline.name, BrIconClipboardOutline)
    app.component(BrIconClipboardSharp.name, BrIconClipboardSharp)
    app.component(BrIconClipboard.name, BrIconClipboard)
  },
} as Plugin

export { BrIconClipboardOutline, BrIconClipboardSharp, BrIconClipboard }

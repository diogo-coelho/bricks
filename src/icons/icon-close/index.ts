import { App, Plugin } from 'vue'
import BrIconCloseOutline from './BrIconCloseOutline.vue'
import BrIconCloseSharp from './BrIconCloseSharp.vue'
import BrIconClose from './BrIconClose.vue'

export default {
  install(app: App) {
    app.component(BrIconCloseOutline.name, BrIconCloseOutline)
    app.component(BrIconCloseSharp.name, BrIconCloseSharp)
    app.component(BrIconClose.name, BrIconClose)
  },
} as Plugin

export { BrIconCloseOutline, BrIconCloseSharp, BrIconClose }

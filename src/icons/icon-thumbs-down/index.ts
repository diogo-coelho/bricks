import { App, Plugin } from 'vue'
import BrIconThumbsDownOutline from './BrIconThumbsDownOutline.vue'
import BrIconThumbsDownSharp from './BrIconThumbsDownSharp.vue'
import BrIconThumbsDown from './BrIconThumbsDown.vue'

export default {
  install(app: App) {
    app.component(BrIconThumbsDownOutline.name, BrIconThumbsDownOutline)
    app.component(BrIconThumbsDownSharp.name, BrIconThumbsDownSharp)
    app.component(BrIconThumbsDown.name, BrIconThumbsDown)
  },
} as Plugin

export { BrIconThumbsDownOutline, BrIconThumbsDownSharp, BrIconThumbsDown }

import { App, Plugin } from 'vue'
import BrIconThumbsUpOutline from './BrIconThumbsUpOutline.vue'
import BrIconThumbsUpSharp from './BrIconThumbsUpSharp.vue'
import BrIconThumbsUp from './BrIconThumbsUp.vue'

export default {
  install(app: App) {
    app.component(BrIconThumbsUpOutline.name, BrIconThumbsUpOutline)
    app.component(BrIconThumbsUpSharp.name, BrIconThumbsUpSharp)
    app.component(BrIconThumbsUp.name, BrIconThumbsUp)
  },
} as Plugin

export { BrIconThumbsUpOutline, BrIconThumbsUpSharp, BrIconThumbsUp }

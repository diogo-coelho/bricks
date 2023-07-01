import { App, Plugin } from 'vue'
import BrIconSkullOutline from './BrIconSkullOutline.vue'
import BrIconSkullSharp from './BrIconSkullSharp.vue'
import BrIconSkull from './BrIconSkull.vue'

export default {
  install(app: App) {
    app.component(BrIconSkullOutline.name, BrIconSkullOutline)
    app.component(BrIconSkullSharp.name, BrIconSkullSharp)
    app.component(BrIconSkull.name, BrIconSkull)
  },
} as Plugin

export { BrIconSkullOutline, BrIconSkullSharp, BrIconSkull }

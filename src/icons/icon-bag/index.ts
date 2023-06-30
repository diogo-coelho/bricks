import { App, Plugin } from 'vue'
import BrIconBag from './BrIconBag.vue'
import BrIconBagOutline from './BrIconBagOutline.vue'
import BrIconBagSharp from './BrIconBagSharp.vue'

export default {
  install(app: App) {
    app.component(BrIconBag.name, BrIconBag)
    app.component(BrIconBagOutline.name, BrIconBagOutline)
    app.component(BrIconBagSharp.name, BrIconBagSharp)
  },
} as Plugin

export { BrIconBag, BrIconBagOutline, BrIconBagSharp }

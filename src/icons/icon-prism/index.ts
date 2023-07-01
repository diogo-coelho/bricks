import { App, Plugin } from 'vue'
import BrIconPrismOutline from './BrIconPrismOutline.vue'
import BrIconPrismSharp from './BrIconPrismSharp.vue'
import BrIconPrism from './BrIconPrism.vue'

export default {
  install(app: App) {
    app.component(BrIconPrismOutline.name, BrIconPrismOutline)
    app.component(BrIconPrismSharp.name, BrIconPrismSharp)
    app.component(BrIconPrism.name, BrIconPrism)
  },
} as Plugin

export { BrIconPrismOutline, BrIconPrismSharp, BrIconPrism }

import { App, Plugin } from 'vue'
import BrIconSwapHorizontalOutline from './BrIconSwapHorizontalOutline.vue'
import BrIconSwapHorizontalSharp from './BrIconSwapHorizontalSharp.vue'
import BrIconSwapHorizontal from './BrIconSwapHorizontal.vue'

export default {
  install(app: App) {
    app.component(BrIconSwapHorizontalOutline.name, BrIconSwapHorizontalOutline)
    app.component(BrIconSwapHorizontalSharp.name, BrIconSwapHorizontalSharp)
    app.component(BrIconSwapHorizontal.name, BrIconSwapHorizontal)
  },
} as Plugin

export {
  BrIconSwapHorizontalOutline,
  BrIconSwapHorizontalSharp,
  BrIconSwapHorizontal,
}

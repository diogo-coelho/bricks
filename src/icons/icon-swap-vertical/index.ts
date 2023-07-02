import { App, Plugin } from 'vue'
import BrIconSwapVerticalOutline from './BrIconSwapVerticalOutline.vue'
import BrIconSwapVerticalSharp from './BrIconSwapVerticalSharp.vue'
import BrIconSwapVertical from './BrIconSwapVertical.vue'

export default {
  install(app: App) {
    app.component(BrIconSwapVerticalOutline.name, BrIconSwapVerticalOutline)
    app.component(BrIconSwapVerticalSharp.name, BrIconSwapVerticalSharp)
    app.component(BrIconSwapVertical.name, BrIconSwapVertical)
  },
} as Plugin

export {
  BrIconSwapVerticalOutline,
  BrIconSwapVerticalSharp,
  BrIconSwapVertical,
}

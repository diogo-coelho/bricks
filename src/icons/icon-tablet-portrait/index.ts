import { App, Plugin } from 'vue'
import BrIconTabletPortraitOutline from './BrIconTabletPortraitOutline.vue'
import BrIconTabletPortraitSharp from './BrIconTabletPortraitSharp.vue'
import BrIconTabletPortrait from './BrIconTabletPortrait.vue'

export default {
  install(app: App) {
    app.component(BrIconTabletPortraitOutline.name, BrIconTabletPortraitOutline)
    app.component(BrIconTabletPortraitSharp.name, BrIconTabletPortraitSharp)
    app.component(BrIconTabletPortrait.name, BrIconTabletPortrait)
  },
} as Plugin

export {
  BrIconTabletPortraitOutline,
  BrIconTabletPortraitSharp,
  BrIconTabletPortrait,
}

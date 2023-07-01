import { App, Plugin } from 'vue'
import BrIconGlobeOutline from './BrIconGlobeOutline.vue'
import BrIconGlobeSharp from './BrIconGlobeSharp.vue'
import BrIconGlobe from './BrIconGlobe.vue'

export default {
  install(app: App) {
    app.component(BrIconGlobeOutline.name, BrIconGlobeOutline)
    app.component(BrIconGlobeSharp.name, BrIconGlobeSharp)
    app.component(BrIconGlobe.name, BrIconGlobe)
  },
} as Plugin

export { BrIconGlobeOutline, BrIconGlobeSharp, BrIconGlobe }

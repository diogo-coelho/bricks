import { App, Plugin } from 'vue'
import BrIconRibbonOutline from './BrIconRibbonOutline.vue'
import BrIconRibbonSharp from './BrIconRibbonSharp.vue'
import BrIconRibbon from './BrIconRibbon.vue'

export default {
  install(app: App) {
    app.component(BrIconRibbonOutline.name, BrIconRibbonOutline)
    app.component(BrIconRibbonSharp.name, BrIconRibbonSharp)
    app.component(BrIconRibbon.name, BrIconRibbon)
  },
} as Plugin

export { BrIconRibbonOutline, BrIconRibbonSharp, BrIconRibbon }

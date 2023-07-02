import { App, Plugin } from 'vue'
import BrIconGlassesOutline from './BrIconGlassesOutline.vue'
import BrIconGlassesSharp from './BrIconGlassesSharp.vue'
import BrIconGlasses from './BrIconGlasses.vue'

export default {
  install(app: App) {
    app.component(BrIconGlassesOutline.name, BrIconGlassesOutline)
    app.component(BrIconGlassesSharp.name, BrIconGlassesSharp)
    app.component(BrIconGlasses.name, BrIconGlasses)
  },
} as Plugin

export { BrIconGlassesOutline, BrIconGlassesSharp, BrIconGlasses }

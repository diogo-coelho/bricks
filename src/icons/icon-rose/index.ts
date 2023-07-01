import { App, Plugin } from 'vue'
import BrIconRoseOutline from './BrIconRoseOutline.vue'
import BrIconRoseSharp from './BrIconRoseSharp.vue'
import BrIconRose from './BrIconRose.vue'

export default {
  install(app: App) {
    app.component(BrIconRoseOutline.name, BrIconRoseOutline)
    app.component(BrIconRoseSharp.name, BrIconRoseSharp)
    app.component(BrIconRose.name, BrIconRose)
  },
} as Plugin

export { BrIconRoseOutline, BrIconRoseSharp, BrIconRose }

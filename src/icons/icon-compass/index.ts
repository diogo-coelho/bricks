import { App, Plugin } from 'vue'
import BrIconCompassOutline from './BrIconCompassOutline.vue'
import BrIconCompassSharp from './BrIconCompassSharp.vue'
import BrIconCompass from './BrIconCompass.vue'

export default {
  install(app: App) {
    app.component(BrIconCompassOutline.name, BrIconCompassOutline)
    app.component(BrIconCompassSharp.name, BrIconCompassSharp)
    app.component(BrIconCompass.name, BrIconCompass)
  },
} as Plugin

export { BrIconCompassOutline, BrIconCompassSharp, BrIconCompass }

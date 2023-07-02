import { App, Plugin } from 'vue'
import BrIconBandageOutline from './BrIconBandageOutline.vue'
import BrIconBandageSharp from './BrIconBandageSharp.vue'
import BrIconBandage from './BrIconBandage.vue'

export default {
  install(app: App) {
    app.component(BrIconBandageOutline.name, BrIconBandageOutline)
    app.component(BrIconBandageSharp.name, BrIconBandageSharp)
    app.component(BrIconBandage.name, BrIconBandage)
  },
} as Plugin

export { BrIconBandageOutline, BrIconBandageSharp, BrIconBandage }

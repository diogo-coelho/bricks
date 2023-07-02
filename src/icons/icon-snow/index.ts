import { App, Plugin } from 'vue'
import BrIconSnowOutline from './BrIconSnowOutline.vue'
import BrIconSnowSharp from './BrIconSnowSharp.vue'
import BrIconSnow from './BrIconSnow.vue'

export default {
  install(app: App) {
    app.component(BrIconSnowOutline.name, BrIconSnowOutline)
    app.component(BrIconSnowSharp.name, BrIconSnowSharp)
    app.component(BrIconSnow.name, BrIconSnow)
  },
} as Plugin

export { BrIconSnowOutline, BrIconSnowSharp, BrIconSnow }

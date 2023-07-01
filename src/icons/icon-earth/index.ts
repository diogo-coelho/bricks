import { App, Plugin } from 'vue'
import BrIconEarthOutline from './BrIconEarthOutline.vue'
import BrIconEarthSharp from './BrIconEarthSharp.vue'
import BrIconEarth from './BrIconEarth.vue'

export default {
  install(app: App) {
    app.component(BrIconEarthOutline.name, BrIconEarthOutline)
    app.component(BrIconEarthSharp.name, BrIconEarthSharp)
    app.component(BrIconEarth.name, BrIconEarth)
  },
} as Plugin

export { BrIconEarthOutline, BrIconEarthSharp, BrIconEarth }

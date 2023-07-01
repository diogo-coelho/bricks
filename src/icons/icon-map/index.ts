import { App, Plugin } from 'vue'
import BrIconMapOutline from './BrIconMapOutline.vue'
import BrIconMapSharp from './BrIconMapSharp.vue'
import BrIconMap from './BrIconMap.vue'

export default {
  install(app: App) {
    app.component(BrIconMapOutline.name, BrIconMapOutline)
    app.component(BrIconMapSharp.name, BrIconMapSharp)
    app.component(BrIconMap.name, BrIconMap)
  },
} as Plugin

export { BrIconMapOutline, BrIconMapSharp, BrIconMap }

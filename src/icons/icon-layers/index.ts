import { App, Plugin } from 'vue'
import BrIconLayersOutline from './BrIconLayersOutline.vue'
import BrIconLayersSharp from './BrIconLayersSharp.vue'
import BrIconLayers from './BrIconLayers.vue'

export default {
  install(app: App) {
    app.component(BrIconLayersOutline.name, BrIconLayersOutline)
    app.component(BrIconLayersSharp.name, BrIconLayersSharp)
    app.component(BrIconLayers.name, BrIconLayers)
  },
} as Plugin

export { BrIconLayersOutline, BrIconLayersSharp, BrIconLayers }

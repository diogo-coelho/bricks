import { App, Plugin } from 'vue'
import BrIconShapesOutline from './BrIconShapesOutline.vue'
import BrIconShapesSharp from './BrIconShapesSharp.vue'
import BrIconShapes from './BrIconShapes.vue'

export default {
  install(app: App) {
    app.component(BrIconShapesOutline.name, BrIconShapesOutline)
    app.component(BrIconShapesSharp.name, BrIconShapesSharp)
    app.component(BrIconShapes.name, BrIconShapes)
  },
} as Plugin

export { BrIconShapesOutline, BrIconShapesSharp, BrIconShapes }

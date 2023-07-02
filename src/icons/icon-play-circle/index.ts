import { App, Plugin } from 'vue'
import BrIconPlayCircleOutline from './BrIconPlayCircleOutline.vue'
import BrIconPlayCircleSharp from './BrIconPlayCircleSharp.vue'
import BrIconPlayCircle from './BrIconPlayCircle.vue'

export default {
  install(app: App) {
    app.component(BrIconPlayCircleOutline.name, BrIconPlayCircleOutline)
    app.component(BrIconPlayCircleSharp.name, BrIconPlayCircleSharp)
    app.component(BrIconPlayCircle.name, BrIconPlayCircle)
  },
} as Plugin

export { BrIconPlayCircleOutline, BrIconPlayCircleSharp, BrIconPlayCircle }

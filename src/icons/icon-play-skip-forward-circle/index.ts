import { App, Plugin } from 'vue'
import BrIconPlaySkipForwardCircleOutline from './BrIconPlaySkipForwardCircleOutline.vue'
import BrIconPlaySkipForwardCircleSharp from './BrIconPlaySkipForwardCircleSharp.vue'
import BrIconPlaySkipForwardCircle from './BrIconPlaySkipForwardCircle.vue'

export default {
  install(app: App) {
    app.component(
      BrIconPlaySkipForwardCircleOutline.name,
      BrIconPlaySkipForwardCircleOutline
    )
    app.component(
      BrIconPlaySkipForwardCircleSharp.name,
      BrIconPlaySkipForwardCircleSharp
    )
    app.component(BrIconPlaySkipForwardCircle.name, BrIconPlaySkipForwardCircle)
  },
} as Plugin

export {
  BrIconPlaySkipForwardCircleOutline,
  BrIconPlaySkipForwardCircleSharp,
  BrIconPlaySkipForwardCircle,
}

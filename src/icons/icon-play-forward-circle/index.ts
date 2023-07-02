import { App, Plugin } from 'vue'
import BrIconPlayForwardCircleOutline from './BrIconPlayForwardCircleOutline.vue'
import BrIconPlayForwardCircleSharp from './BrIconPlayForwardCircleSharp.vue'
import BrIconPlayForwardCircle from './BrIconPlayForwardCircle.vue'

export default {
  install(app: App) {
    app.component(
      BrIconPlayForwardCircleOutline.name,
      BrIconPlayForwardCircleOutline
    )
    app.component(
      BrIconPlayForwardCircleSharp.name,
      BrIconPlayForwardCircleSharp
    )
    app.component(BrIconPlayForwardCircle.name, BrIconPlayForwardCircle)
  },
} as Plugin

export {
  BrIconPlayForwardCircleOutline,
  BrIconPlayForwardCircleSharp,
  BrIconPlayForwardCircle,
}

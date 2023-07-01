import { App, Plugin } from 'vue'
import BrIconPlaySkipBackCircleOutline from './BrIconPlaySkipBackCircleOutline.vue'
import BrIconPlaySkipBackCircleSharp from './BrIconPlaySkipBackCircleSharp.vue'
import BrIconPlaySkipBackCircle from './BrIconPlaySkipBackCircle.vue'

export default {
  install(app: App) {
    app.component(
      BrIconPlaySkipBackCircleOutline.name,
      BrIconPlaySkipBackCircleOutline
    )
    app.component(
      BrIconPlaySkipBackCircleSharp.name,
      BrIconPlaySkipBackCircleSharp
    )
    app.component(BrIconPlaySkipBackCircle.name, BrIconPlaySkipBackCircle)
  },
} as Plugin

export {
  BrIconPlaySkipBackCircleOutline,
  BrIconPlaySkipBackCircleSharp,
  BrIconPlaySkipBackCircle,
}

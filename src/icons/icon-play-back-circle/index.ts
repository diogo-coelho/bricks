import { App, Plugin } from 'vue'
import BrIconPlayBackCircleOutline from './BrIconPlayBackCircleOutline.vue'
import BrIconPlayBackCircleSharp from './BrIconPlayBackCircleSharp.vue'
import BrIconPlayBackCircle from './BrIconPlayBackCircle.vue'

export default {
  install(app: App) {
    app.component(BrIconPlayBackCircleOutline.name, BrIconPlayBackCircleOutline)
    app.component(BrIconPlayBackCircleSharp.name, BrIconPlayBackCircleSharp)
    app.component(BrIconPlayBackCircle.name, BrIconPlayBackCircle)
  },
} as Plugin

export {
  BrIconPlayBackCircleOutline,
  BrIconPlayBackCircleSharp,
  BrIconPlayBackCircle,
}

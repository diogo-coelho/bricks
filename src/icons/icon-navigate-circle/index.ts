import { App, Plugin } from 'vue'
import BrIconNavigateCircleOutline from './BrIconNavigateCircleOutline.vue'
import BrIconNavigateCircleSharp from './BrIconNavigateCircleSharp.vue'
import BrIconNavigateCircle from './BrIconNavigateCircle.vue'

export default {
  install(app: App) {
    app.component(BrIconNavigateCircleOutline.name, BrIconNavigateCircleOutline)
    app.component(BrIconNavigateCircleSharp.name, BrIconNavigateCircleSharp)
    app.component(BrIconNavigateCircle.name, BrIconNavigateCircle)
  },
} as Plugin

export {
  BrIconNavigateCircleOutline,
  BrIconNavigateCircleSharp,
  BrIconNavigateCircle,
}

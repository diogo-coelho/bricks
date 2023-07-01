import { App, Plugin } from 'vue'
import BrIconCheckmarkCircleOutline from './BrIconCheckmarkCircleOutline.vue'
import BrIconCheckmarkCircleSharp from './BrIconCheckmarkCircleSharp.vue'
import BrIconCheckmarkCircle from './BrIconCheckmarkCircle.vue'

export default {
  install(app: App) {
    app.component(
      BrIconCheckmarkCircleOutline.name,
      BrIconCheckmarkCircleOutline
    )
    app.component(BrIconCheckmarkCircleSharp.name, BrIconCheckmarkCircleSharp)
    app.component(BrIconCheckmarkCircle.name, BrIconCheckmarkCircle)
  },
} as Plugin

export {
  BrIconCheckmarkCircleOutline,
  BrIconCheckmarkCircleSharp,
  BrIconCheckmarkCircle,
}

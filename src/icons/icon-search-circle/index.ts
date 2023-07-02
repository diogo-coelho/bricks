import { App, Plugin } from 'vue'
import BrIconSearchCircleOutline from './BrIconSearchCircleOutline.vue'
import BrIconSearchCircleSharp from './BrIconSearchCircleSharp.vue'
import BrIconSearchCircle from './BrIconSearchCircle.vue'

export default {
  install(app: App) {
    app.component(BrIconSearchCircleOutline.name, BrIconSearchCircleOutline)
    app.component(BrIconSearchCircleSharp.name, BrIconSearchCircleSharp)
    app.component(BrIconSearchCircle.name, BrIconSearchCircle)
  },
} as Plugin

export {
  BrIconSearchCircleOutline,
  BrIconSearchCircleSharp,
  BrIconSearchCircle,
}

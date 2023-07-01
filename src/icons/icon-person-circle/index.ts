import { App, Plugin } from 'vue'
import BrIconPersonCircleOutline from './BrIconPersonCircleOutline.vue'
import BrIconPersonCircleSharp from './BrIconPersonCircleSharp.vue'
import BrIconPersonCircle from './BrIconPersonCircle.vue'

export default {
  install(app: App) {
    app.component(BrIconPersonCircleOutline.name, BrIconPersonCircleOutline)
    app.component(BrIconPersonCircleSharp.name, BrIconPersonCircleSharp)
    app.component(BrIconPersonCircle.name, BrIconPersonCircle)
  },
} as Plugin

export {
  BrIconPersonCircleOutline,
  BrIconPersonCircleSharp,
  BrIconPersonCircle,
}

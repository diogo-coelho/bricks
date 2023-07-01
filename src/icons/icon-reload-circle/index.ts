import { App, Plugin } from 'vue'
import BrIconReloadCircleOutline from './BrIconReloadCircleOutline.vue'
import BrIconReloadCircleSharp from './BrIconReloadCircleSharp.vue'
import BrIconReloadCircle from './BrIconReloadCircle.vue'

export default {
  install(app: App) {
    app.component(BrIconReloadCircleOutline.name, BrIconReloadCircleOutline)
    app.component(BrIconReloadCircleSharp.name, BrIconReloadCircleSharp)
    app.component(BrIconReloadCircle.name, BrIconReloadCircle)
  },
} as Plugin

export {
  BrIconReloadCircleOutline,
  BrIconReloadCircleSharp,
  BrIconReloadCircle,
}

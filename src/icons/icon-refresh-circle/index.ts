import { App, Plugin } from 'vue'
import BrIconRefreshCircleOutline from './BrIconRefreshCircleOutline.vue'
import BrIconRefreshCircleSharp from './BrIconRefreshCircleSharp.vue'
import BrIconRefreshCircle from './BrIconRefreshCircle.vue'

export default {
  install(app: App) {
    app.component(BrIconRefreshCircleOutline.name, BrIconRefreshCircleOutline)
    app.component(BrIconRefreshCircleSharp.name, BrIconRefreshCircleSharp)
    app.component(BrIconRefreshCircle.name, BrIconRefreshCircle)
  },
} as Plugin

export {
  BrIconRefreshCircleOutline,
  BrIconRefreshCircleSharp,
  BrIconRefreshCircle,
}

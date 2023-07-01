import { App, Plugin } from 'vue'
import BrIconPauseCircleOutline from './BrIconPauseCircleOutline.vue'
import BrIconPauseCircleSharp from './BrIconPauseCircleSharp.vue'
import BrIconPauseCircle from './BrIconPauseCircle.vue'

export default {
  install(app: App) {
    app.component(BrIconPauseCircleOutline.name, BrIconPauseCircleOutline)
    app.component(BrIconPauseCircleSharp.name, BrIconPauseCircleSharp)
    app.component(BrIconPauseCircle.name, BrIconPauseCircle)
  },
} as Plugin

export { BrIconPauseCircleOutline, BrIconPauseCircleSharp, BrIconPauseCircle }

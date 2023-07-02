import { App, Plugin } from 'vue'
import BrIconStopCircleOutline from './BrIconStopCircleOutline.vue'
import BrIconStopCircleSharp from './BrIconStopCircleSharp.vue'
import BrIconStopCircle from './BrIconStopCircle.vue'

export default {
  install(app: App) {
    app.component(BrIconStopCircleOutline.name, BrIconStopCircleOutline)
    app.component(BrIconStopCircleSharp.name, BrIconStopCircleSharp)
    app.component(BrIconStopCircle.name, BrIconStopCircle)
  },
} as Plugin

export { BrIconStopCircleOutline, BrIconStopCircleSharp, BrIconStopCircle }

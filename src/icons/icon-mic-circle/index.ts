import { App, Plugin } from 'vue'
import BrIconMicCircleOutline from './BrIconMicCircleOutline.vue'
import BrIconMicCircleSharp from './BrIconMicCircleSharp.vue'
import BrIconMicCircle from './BrIconMicCircle.vue'

export default {
  install(app: App) {
    app.component(BrIconMicCircleOutline.name, BrIconMicCircleOutline)
    app.component(BrIconMicCircleSharp.name, BrIconMicCircleSharp)
    app.component(BrIconMicCircle.name, BrIconMicCircle)
  },
} as Plugin

export { BrIconMicCircleOutline, BrIconMicCircleSharp, BrIconMicCircle }

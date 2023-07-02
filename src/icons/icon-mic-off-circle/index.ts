import { App, Plugin } from 'vue'
import BrIconMicOffCircleOutline from './BrIconMicOffCircleOutline.vue'
import BrIconMicOffCircleSharp from './BrIconMicOffCircleSharp.vue'
import BrIconMicOffCircle from './BrIconMicOffCircle.vue'

export default {
  install(app: App) {
    app.component(BrIconMicOffCircleOutline.name, BrIconMicOffCircleOutline)
    app.component(BrIconMicOffCircleSharp.name, BrIconMicOffCircleSharp)
    app.component(BrIconMicOffCircle.name, BrIconMicOffCircle)
  },
} as Plugin

export {
  BrIconMicOffCircleOutline,
  BrIconMicOffCircleSharp,
  BrIconMicOffCircle,
}

import { App, Plugin } from 'vue'
import BrIconMicOffOutline from './BrIconMicOffOutline.vue'
import BrIconMicOffSharp from './BrIconMicOffSharp.vue'
import BrIconMicOff from './BrIconMicOff.vue'

export default {
  install(app: App) {
    app.component(BrIconMicOffOutline.name, BrIconMicOffOutline)
    app.component(BrIconMicOffSharp.name, BrIconMicOffSharp)
    app.component(BrIconMicOff.name, BrIconMicOff)
  },
} as Plugin

export { BrIconMicOffOutline, BrIconMicOffSharp, BrIconMicOff }

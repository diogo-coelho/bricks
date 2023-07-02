import { App, Plugin } from 'vue'
import BrIconMicOutline from './BrIconMicOutline.vue'
import BrIconMicSharp from './BrIconMicSharp.vue'
import BrIconMic from './BrIconMic.vue'

export default {
  install(app: App) {
    app.component(BrIconMicOutline.name, BrIconMicOutline)
    app.component(BrIconMicSharp.name, BrIconMicSharp)
    app.component(BrIconMic.name, BrIconMic)
  },
} as Plugin

export { BrIconMicOutline, BrIconMicSharp, BrIconMic }

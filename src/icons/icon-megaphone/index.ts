import { App, Plugin } from 'vue'
import BrIconMegaphoneOutline from './BrIconMegaphoneOutline.vue'
import BrIconMegaphoneSharp from './BrIconMegaphoneSharp.vue'
import BrIconMegaphone from './BrIconMegaphone.vue'

export default {
  install(app: App) {
    app.component(BrIconMegaphoneOutline.name, BrIconMegaphoneOutline)
    app.component(BrIconMegaphoneSharp.name, BrIconMegaphoneSharp)
    app.component(BrIconMegaphone.name, BrIconMegaphone)
  },
} as Plugin

export { BrIconMegaphoneOutline, BrIconMegaphoneSharp, BrIconMegaphone }

import { App, Plugin } from 'vue'
import BrIconMoonOutline from './BrIconMoonOutline.vue'
import BrIconMoonSharp from './BrIconMoonSharp.vue'
import BrIconMoon from './BrIconMoon.vue'

export default {
  install(app: App) {
    app.component(BrIconMoonOutline.name, BrIconMoonOutline)
    app.component(BrIconMoonSharp.name, BrIconMoonSharp)
    app.component(BrIconMoon.name, BrIconMoon)
  },
} as Plugin

export { BrIconMoonOutline, BrIconMoonSharp, BrIconMoon }

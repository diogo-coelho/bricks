import { App, Plugin } from 'vue'
import BrIconEnterOutline from './BrIconEnterOutline.vue'
import BrIconEnterSharp from './BrIconEnterSharp.vue'
import BrIconEnter from './BrIconEnter.vue'

export default {
  install(app: App) {
    app.component(BrIconEnterOutline.name, BrIconEnterOutline)
    app.component(BrIconEnterSharp.name, BrIconEnterSharp)
    app.component(BrIconEnter.name, BrIconEnter)
  },
} as Plugin

export { BrIconEnterOutline, BrIconEnterSharp, BrIconEnter }

import { App, Plugin } from 'vue'
import BrIconSparklesOutline from './BrIconSparklesOutline.vue'
import BrIconSparklesSharp from './BrIconSparklesSharp.vue'
import BrIconSparkles from './BrIconSparkles.vue'

export default {
  install(app: App) {
    app.component(BrIconSparklesOutline.name, BrIconSparklesOutline)
    app.component(BrIconSparklesSharp.name, BrIconSparklesSharp)
    app.component(BrIconSparkles.name, BrIconSparkles)
  },
} as Plugin

export { BrIconSparklesOutline, BrIconSparklesSharp, BrIconSparkles }

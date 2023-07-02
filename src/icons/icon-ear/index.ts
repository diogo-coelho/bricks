import { App, Plugin } from 'vue'
import BrIconEarOutline from './BrIconEarOutline.vue'
import BrIconEarSharp from './BrIconEarSharp.vue'
import BrIconEar from './BrIconEar.vue'

export default {
  install(app: App) {
    app.component(BrIconEarOutline.name, BrIconEarOutline)
    app.component(BrIconEarSharp.name, BrIconEarSharp)
    app.component(BrIconEar.name, BrIconEar)
  },
} as Plugin

export { BrIconEarOutline, BrIconEarSharp, BrIconEar }

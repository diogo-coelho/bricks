import { App, Plugin } from 'vue'
import BrIconOpenOutline from './BrIconOpenOutline.vue'
import BrIconOpenSharp from './BrIconOpenSharp.vue'
import BrIconOpen from './BrIconOpen.vue'

export default {
  install(app: App) {
    app.component(BrIconOpenOutline.name, BrIconOpenOutline)
    app.component(BrIconOpenSharp.name, BrIconOpenSharp)
    app.component(BrIconOpen.name, BrIconOpen)
  },
} as Plugin

export { BrIconOpenOutline, BrIconOpenSharp, BrIconOpen }

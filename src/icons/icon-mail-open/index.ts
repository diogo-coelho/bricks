import { App, Plugin } from 'vue'
import BrIconMailOpenOutline from './BrIconMailOpenOutline.vue'
import BrIconMailOpenSharp from './BrIconMailOpenSharp.vue'
import BrIconMailOpen from './BrIconMailOpen.vue'

export default {
  install(app: App) {
    app.component(BrIconMailOpenOutline.name, BrIconMailOpenOutline)
    app.component(BrIconMailOpenSharp.name, BrIconMailOpenSharp)
    app.component(BrIconMailOpen.name, BrIconMailOpen)
  },
} as Plugin

export { BrIconMailOpenOutline, BrIconMailOpenSharp, BrIconMailOpen }

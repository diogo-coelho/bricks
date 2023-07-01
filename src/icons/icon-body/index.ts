import { App, Plugin } from 'vue'
import BrIconBodyOutline from './BrIconBodyOutline.vue'
import BrIconBodySharp from './BrIconBodySharp.vue'
import BrIconBody from './BrIconBody.vue'

export default {
  install(app: App) {
    app.component(BrIconBodyOutline.name, BrIconBodyOutline)
    app.component(BrIconBodySharp.name, BrIconBodySharp)
    app.component(BrIconBody.name, BrIconBody)
  },
} as Plugin

export { BrIconBodyOutline, BrIconBodySharp, BrIconBody }

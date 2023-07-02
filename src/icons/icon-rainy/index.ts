import { App, Plugin } from 'vue'
import BrIconRainyOutline from './BrIconRainyOutline.vue'
import BrIconRainySharp from './BrIconRainySharp.vue'
import BrIconRainy from './BrIconRainy.vue'

export default {
  install(app: App) {
    app.component(BrIconRainyOutline.name, BrIconRainyOutline)
    app.component(BrIconRainySharp.name, BrIconRainySharp)
    app.component(BrIconRainy.name, BrIconRainy)
  },
} as Plugin

export { BrIconRainyOutline, BrIconRainySharp, BrIconRainy }

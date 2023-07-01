import { App, Plugin } from 'vue'
import BrIconLogoEdge from './BrIconLogoEdge.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoEdge.name, BrIconLogoEdge)
  },
} as Plugin

export { BrIconLogoEdge }

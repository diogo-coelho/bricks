import { App, Plugin } from 'vue'
import BrTooltip from './BrTooltip.vue'

export default {
  install(app: App) {
    app.component(BrTooltip.name, BrTooltip)
  },
} as Plugin

export { BrTooltip }

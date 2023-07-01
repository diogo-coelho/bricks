import { App, Plugin } from 'vue'
import BrIconHelpCircleOutline from './BrIconHelpCircleOutline.vue'
import BrIconHelpCircleSharp from './BrIconHelpCircleSharp.vue'
import BrIconHelpCircle from './BrIconHelpCircle.vue'

export default {
  install(app: App) {
    app.component(BrIconHelpCircleOutline.name, BrIconHelpCircleOutline)
    app.component(BrIconHelpCircleSharp.name, BrIconHelpCircleSharp)
    app.component(BrIconHelpCircle.name, BrIconHelpCircle)
  },
} as Plugin

export { BrIconHelpCircleOutline, BrIconHelpCircleSharp, BrIconHelpCircle }

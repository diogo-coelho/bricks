import { App, Plugin } from 'vue'
import BrIconGridOutline from './BrIconGridOutline.vue'
import BrIconGridSharp from './BrIconGridSharp.vue'
import BrIconGrid from './BrIconGrid.vue'

export default {
  install(app: App) {
    app.component(BrIconGridOutline.name, BrIconGridOutline)
    app.component(BrIconGridSharp.name, BrIconGridSharp)
    app.component(BrIconGrid.name, BrIconGrid)
  },
} as Plugin

export { BrIconGridOutline, BrIconGridSharp, BrIconGrid }

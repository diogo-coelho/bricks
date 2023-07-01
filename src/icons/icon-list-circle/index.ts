import { App, Plugin } from 'vue'
import BrIconListCircleOutline from './BrIconListCircleOutline.vue'
import BrIconListCircleSharp from './BrIconListCircleSharp.vue'
import BrIconListCircle from './BrIconListCircle.vue'

export default {
  install(app: App) {
    app.component(BrIconListCircleOutline.name, BrIconListCircleOutline)
    app.component(BrIconListCircleSharp.name, BrIconListCircleSharp)
    app.component(BrIconListCircle.name, BrIconListCircle)
  },
} as Plugin

export { BrIconListCircleOutline, BrIconListCircleSharp, BrIconListCircle }

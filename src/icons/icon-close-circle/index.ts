import { App, Plugin } from 'vue'
import BrIconCloseCircleOutline from './BrIconCloseCircleOutline.vue'
import BrIconCloseCircleSharp from './BrIconCloseCircleSharp.vue'
import BrIconCloseCircle from './BrIconCloseCircle.vue'

export default {
  install(app: App) {
    app.component(BrIconCloseCircleOutline.name, BrIconCloseCircleOutline)
    app.component(BrIconCloseCircleSharp.name, BrIconCloseCircleSharp)
    app.component(BrIconCloseCircle.name, BrIconCloseCircle)
  },
} as Plugin

export { BrIconCloseCircleOutline, BrIconCloseCircleSharp, BrIconCloseCircle }

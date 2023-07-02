import { App, Plugin } from 'vue'
import BrIconAlertCircle from './BrIconAlertCircle.vue'
import BrIconAlertCircleOutline from './BrIconAlertCircleOutline.vue'
import BrIconAlertCircleSharp from './BrIconAlertCircleSharp.vue'

export default {
  install(app: App) {
    app.component(BrIconAlertCircle.name, BrIconAlertCircle)
    app.component(BrIconAlertCircleOutline.name, BrIconAlertCircleOutline)
    app.component(BrIconAlertCircleSharp.name, BrIconAlertCircleSharp)
  },
} as Plugin

export { BrIconAlertCircle, BrIconAlertCircleOutline, BrIconAlertCircleSharp }

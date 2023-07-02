import { App, Plugin } from 'vue'
import BrIconTimerOutline from './BrIconTimerOutline.vue'
import BrIconTimerSharp from './BrIconTimerSharp.vue'
import BrIconTimer from './BrIconTimer.vue'

export default {
  install(app: App) {
    app.component(BrIconTimerOutline.name, BrIconTimerOutline)
    app.component(BrIconTimerSharp.name, BrIconTimerSharp)
    app.component(BrIconTimer.name, BrIconTimer)
  },
} as Plugin

export { BrIconTimerOutline, BrIconTimerSharp, BrIconTimer }

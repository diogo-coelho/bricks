import { App, Plugin } from 'vue'
import BrIconTimeOutline from './BrIconTimeOutline.vue'
import BrIconTimeSharp from './BrIconTimeSharp.vue'
import BrIconTime from './BrIconTime.vue'

export default {
  install(app: App) {
    app.component(BrIconTimeOutline.name, BrIconTimeOutline)
    app.component(BrIconTimeSharp.name, BrIconTimeSharp)
    app.component(BrIconTime.name, BrIconTime)
  },
} as Plugin

export { BrIconTimeOutline, BrIconTimeSharp, BrIconTime }

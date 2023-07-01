import { App, Plugin } from 'vue'
import BrIconCallOutline from './BrIconCallOutline.vue'
import BrIconCallSharp from './BrIconCallSharp.vue'
import BrIconCall from './BrIconCall.vue'

export default {
  install(app: App) {
    app.component(BrIconCallOutline.name, BrIconCallOutline)
    app.component(BrIconCallSharp.name, BrIconCallSharp)
    app.component(BrIconCall.name, BrIconCall)
  },
} as Plugin

export { BrIconCallOutline, BrIconCallSharp, BrIconCall }

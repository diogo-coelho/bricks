import { App, Plugin } from 'vue'
import BrIconHandLeftOutline from './BrIconHandLeftOutline.vue'
import BrIconHandLeftSharp from './BrIconHandLeftSharp.vue'
import BrIconHandLeft from './BrIconHandLeft.vue'

export default {
  install(app: App) {
    app.component(BrIconHandLeftOutline.name, BrIconHandLeftOutline)
    app.component(BrIconHandLeftSharp.name, BrIconHandLeftSharp)
    app.component(BrIconHandLeft.name, BrIconHandLeft)
  },
} as Plugin

export { BrIconHandLeftOutline, BrIconHandLeftSharp, BrIconHandLeft }

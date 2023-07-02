import { App, Plugin } from 'vue'
import BrIconCashOutline from './BrIconCashOutline.vue'
import BrIconCashSharp from './BrIconCashSharp.vue'
import BrIconCash from './BrIconCash.vue'

export default {
  install(app: App) {
    app.component(BrIconCashOutline.name, BrIconCashOutline)
    app.component(BrIconCashSharp.name, BrIconCashSharp)
    app.component(BrIconCash.name, BrIconCash)
  },
} as Plugin

export { BrIconCashOutline, BrIconCashSharp, BrIconCash }

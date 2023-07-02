import { App, Plugin } from 'vue'
import BrIconIdCardOutline from './BrIconIdCardOutline.vue'
import BrIconIdCardSharp from './BrIconIdCardSharp.vue'
import BrIconIdCard from './BrIconIdCard.vue'

export default {
  install(app: App) {
    app.component(BrIconIdCardOutline.name, BrIconIdCardOutline)
    app.component(BrIconIdCardSharp.name, BrIconIdCardSharp)
    app.component(BrIconIdCard.name, BrIconIdCard)
  },
} as Plugin

export { BrIconIdCardOutline, BrIconIdCardSharp, BrIconIdCard }

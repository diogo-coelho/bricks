import { App, Plugin } from 'vue'
import BrIconShareOutline from './BrIconShareOutline.vue'
import BrIconShareSharp from './BrIconShareSharp.vue'
import BrIconShare from './BrIconShare.vue'

export default {
  install(app: App) {
    app.component(BrIconShareOutline.name, BrIconShareOutline)
    app.component(BrIconShareSharp.name, BrIconShareSharp)
    app.component(BrIconShare.name, BrIconShare)
  },
} as Plugin

export { BrIconShareOutline, BrIconShareSharp, BrIconShare }

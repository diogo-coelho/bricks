import { App, Plugin } from 'vue'
import BrIconBanOutline from './BrIconBanOutline.vue'
import BrIconBanSharp from './BrIconBanSharp.vue'
import BrIconBan from './BrIconBan.vue'

export default {
  install(app: App) {
    app.component(BrIconBanOutline.name, BrIconBanOutline)
    app.component(BrIconBanSharp.name, BrIconBanSharp)
    app.component(BrIconBan.name, BrIconBan)
  },
} as Plugin

export { BrIconBanOutline, BrIconBanSharp, BrIconBan }

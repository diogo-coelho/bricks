import { App, Plugin } from 'vue'
import BrIconMailUnreadOutline from './BrIconMailUnreadOutline.vue'
import BrIconMailUnreadSharp from './BrIconMailUnreadSharp.vue'
import BrIconMailUnread from './BrIconMailUnread.vue'

export default {
  install(app: App) {
    app.component(BrIconMailUnreadOutline.name, BrIconMailUnreadOutline)
    app.component(BrIconMailUnreadSharp.name, BrIconMailUnreadSharp)
    app.component(BrIconMailUnread.name, BrIconMailUnread)
  },
} as Plugin

export { BrIconMailUnreadOutline, BrIconMailUnreadSharp, BrIconMailUnread }

import { App, Plugin } from 'vue'
import BrIconChatboxEllipsesOutline from './BrIconChatboxEllipsesOutline.vue'
import BrIconChatboxEllipsesSharp from './BrIconChatboxEllipsesSharp.vue'
import BrIconChatboxEllipses from './BrIconChatboxEllipses.vue'

export default {
  install(app: App) {
    app.component(
      BrIconChatboxEllipsesOutline.name,
      BrIconChatboxEllipsesOutline
    )
    app.component(BrIconChatboxEllipsesSharp.name, BrIconChatboxEllipsesSharp)
    app.component(BrIconChatboxEllipses.name, BrIconChatboxEllipses)
  },
} as Plugin

export {
  BrIconChatboxEllipsesOutline,
  BrIconChatboxEllipsesSharp,
  BrIconChatboxEllipses,
}

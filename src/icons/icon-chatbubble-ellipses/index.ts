import { App, Plugin } from 'vue'
import BrIconChatbubbleEllipsesOutline from './BrIconChatbubbleEllipsesOutline.vue'
import BrIconChatbubbleEllipsesSharp from './BrIconChatbubbleEllipsesSharp.vue'
import BrIconChatbubbleEllipses from './BrIconChatbubbleEllipses.vue'

export default {
  install(app: App) {
    app.component(
      BrIconChatbubbleEllipsesOutline.name,
      BrIconChatbubbleEllipsesOutline
    )
    app.component(
      BrIconChatbubbleEllipsesSharp.name,
      BrIconChatbubbleEllipsesSharp
    )
    app.component(BrIconChatbubbleEllipses.name, BrIconChatbubbleEllipses)
  },
} as Plugin

export {
  BrIconChatbubbleEllipsesOutline,
  BrIconChatbubbleEllipsesSharp,
  BrIconChatbubbleEllipses,
}

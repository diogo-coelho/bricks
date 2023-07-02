import { App, Plugin } from 'vue'
import BrIconChatbubbleOutline from './BrIconChatbubbleOutline.vue'
import BrIconChatbubbleSharp from './BrIconChatbubbleSharp.vue'
import BrIconChatbubble from './BrIconChatbubble.vue'

export default {
  install(app: App) {
    app.component(BrIconChatbubbleOutline.name, BrIconChatbubbleOutline)
    app.component(BrIconChatbubbleSharp.name, BrIconChatbubbleSharp)
    app.component(BrIconChatbubble.name, BrIconChatbubble)
  },
} as Plugin

export { BrIconChatbubbleOutline, BrIconChatbubbleSharp, BrIconChatbubble }

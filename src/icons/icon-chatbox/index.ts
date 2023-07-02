import { App, Plugin } from 'vue'
import BrIconChatboxOutline from './BrIconChatboxOutline.vue'
import BrIconChatboxSharp from './BrIconChatboxSharp.vue'
import BrIconChatbox from './BrIconChatbox.vue'

export default {
  install(app: App) {
    app.component(BrIconChatboxOutline.name, BrIconChatboxOutline)
    app.component(BrIconChatboxSharp.name, BrIconChatboxSharp)
    app.component(BrIconChatbox.name, BrIconChatbox)
  },
} as Plugin

export { BrIconChatboxOutline, BrIconChatboxSharp, BrIconChatbox }

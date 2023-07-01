import { App, Plugin } from 'vue'
import BrIconChatbubblesOutline from './BrIconChatbubblesOutline.vue'
import BrIconChatbubblesSharp from './BrIconChatbubblesSharp.vue'
import BrIconChatbubbles from './BrIconChatbubbles.vue'

export default {
  install(app: App) {
    app.component(BrIconChatbubblesOutline.name, BrIconChatbubblesOutline)
    app.component(BrIconChatbubblesSharp.name, BrIconChatbubblesSharp)
    app.component(BrIconChatbubbles.name, BrIconChatbubbles)
  },
} as Plugin

export { BrIconChatbubblesOutline, BrIconChatbubblesSharp, BrIconChatbubbles }

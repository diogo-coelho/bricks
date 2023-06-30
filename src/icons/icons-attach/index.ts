import { App, Plugin } from 'vue'
import BrIconAttach from './BrIconAttach.vue'
import BrIconAttachOutline from './BrIconAttachOutline.vue'
import BrIconAttachSharp from './BrIconAttachSharp.vue'

export default {
  install(app: App) {
    app.component(BrIconAttach.name, BrIconAttach)
    app.component(BrIconAttachOutline.name, BrIconAttachOutline)
    app.component(BrIconAttachSharp.name, BrIconAttachSharp)
  },
} as Plugin

export { BrIconAttach, BrIconAttachOutline, BrIconAttachSharp }

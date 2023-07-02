import { App, Plugin } from 'vue'
import BrIconTrashOutline from './BrIconTrashOutline.vue'
import BrIconTrashSharp from './BrIconTrashSharp.vue'
import BrIconTrash from './BrIconTrash.vue'

export default {
  install(app: App) {
    app.component(BrIconTrashOutline.name, BrIconTrashOutline)
    app.component(BrIconTrashSharp.name, BrIconTrashSharp)
    app.component(BrIconTrash.name, BrIconTrash)
  },
} as Plugin

export { BrIconTrashOutline, BrIconTrashSharp, BrIconTrash }

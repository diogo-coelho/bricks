import { App, Plugin } from 'vue'
import BrIconFolderOpenOutline from './BrIconFolderOpenOutline.vue'
import BrIconFolderOpenSharp from './BrIconFolderOpenSharp.vue'
import BrIconFolderOpen from './BrIconFolderOpen.vue'

export default {
  install(app: App) {
    app.component(BrIconFolderOpenOutline.name, BrIconFolderOpenOutline)
    app.component(BrIconFolderOpenSharp.name, BrIconFolderOpenSharp)
    app.component(BrIconFolderOpen.name, BrIconFolderOpen)
  },
} as Plugin

export { BrIconFolderOpenOutline, BrIconFolderOpenSharp, BrIconFolderOpen }

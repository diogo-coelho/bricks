import { App, Plugin } from 'vue'
import BrIconFolderOutline from './BrIconFolderOutline.vue'
import BrIconFolderSharp from './BrIconFolderSharp.vue'
import BrIconFolder from './BrIconFolder.vue'

export default {
  install(app: App) {
    app.component(BrIconFolderOutline.name, BrIconFolderOutline)
    app.component(BrIconFolderSharp.name, BrIconFolderSharp)
    app.component(BrIconFolder.name, BrIconFolder)
  },
} as Plugin

export { BrIconFolderOutline, BrIconFolderSharp, BrIconFolder }

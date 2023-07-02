import { App, Plugin } from 'vue'
import BrIconArchive from './BrIconArchive.vue'
import BrIconArchiveOutline from './BrIconArchiveOutline.vue'
import BrIconArchiveSharp from './BrIconArchiveSharp.vue'

export default {
  install(app: App) {
    app.component(BrIconArchive.name, BrIconArchive)
    app.component(BrIconArchiveOutline.name, BrIconArchiveOutline)
    app.component(BrIconArchiveSharp.name, BrIconArchiveSharp)
  },
} as Plugin

export { BrIconArchive, BrIconArchiveOutline, BrIconArchiveSharp }

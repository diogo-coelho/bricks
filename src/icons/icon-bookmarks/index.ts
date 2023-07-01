import { App, Plugin } from 'vue'
import BrIconBookmarksOutline from './BrIconBookmarksOutline.vue'
import BrIconBookmarksSharp from './BrIconBookmarksSharp.vue'
import BrIconBookmarks from './BrIconBookmarks.vue'

export default {
  install(app: App) {
    app.component(BrIconBookmarksOutline.name, BrIconBookmarksOutline)
    app.component(BrIconBookmarksSharp.name, BrIconBookmarksSharp)
    app.component(BrIconBookmarks.name, BrIconBookmarks)
  },
} as Plugin

export { BrIconBookmarksOutline, BrIconBookmarksSharp, BrIconBookmarks }

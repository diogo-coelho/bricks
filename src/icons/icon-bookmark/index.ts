import { App, Plugin } from 'vue'
import BrIconBookmarkOutline from './BrIconBookmarkOutline.vue'
import BrIconBookmarkSharp from './BrIconBookmarkSharp.vue'
import BrIconBookmark from './BrIconBookmark.vue'

export default {
  install(app: App) {
    app.component(BrIconBookmarkOutline.name, BrIconBookmarkOutline)
    app.component(BrIconBookmarkSharp.name, BrIconBookmarkSharp)
    app.component(BrIconBookmark.name, BrIconBookmark)
  },
} as Plugin

export { BrIconBookmarkOutline, BrIconBookmarkSharp, BrIconBookmark }

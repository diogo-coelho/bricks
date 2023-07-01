import { App, Plugin } from 'vue'
import BrIconBookOutline from './BrIconBookOutline.vue'
import BrIconBookSharp from './BrIconBookSharp.vue'
import BrIconBook from './BrIconBook.vue'

export default {
  install(app: App) {
    app.component(BrIconBookOutline.name, BrIconBookOutline)
    app.component(BrIconBookSharp.name, BrIconBookSharp)
    app.component(BrIconBook.name, BrIconBook)
  },
} as Plugin

export { BrIconBookOutline, BrIconBookSharp, BrIconBook }

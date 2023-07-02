import { App, Plugin } from 'vue'
import BrIconNewspaperOutline from './BrIconNewspaperOutline.vue'
import BrIconNewspaperSharp from './BrIconNewspaperSharp.vue'
import BrIconNewspaper from './BrIconNewspaper.vue'

export default {
  install(app: App) {
    app.component(BrIconNewspaperOutline.name, BrIconNewspaperOutline)
    app.component(BrIconNewspaperSharp.name, BrIconNewspaperSharp)
    app.component(BrIconNewspaper.name, BrIconNewspaper)
  },
} as Plugin

export { BrIconNewspaperOutline, BrIconNewspaperSharp, BrIconNewspaper }

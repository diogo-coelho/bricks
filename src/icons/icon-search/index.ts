import { App, Plugin } from 'vue'
import BrIconSearchOutline from './BrIconSearchOutline.vue'
import BrIconSearchSharp from './BrIconSearchSharp.vue'
import BrIconSearch from './BrIconSearch.vue'

export default {
  install(app: App) {
    app.component(BrIconSearchOutline.name, BrIconSearchOutline)
    app.component(BrIconSearchSharp.name, BrIconSearchSharp)
    app.component(BrIconSearch.name, BrIconSearch)
  },
} as Plugin

export { BrIconSearchOutline, BrIconSearchSharp, BrIconSearch }

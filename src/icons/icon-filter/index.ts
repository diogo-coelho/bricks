import { App, Plugin } from 'vue'
import BrIconFilterOutline from './BrIconFilterOutline.vue'
import BrIconFilterSharp from './BrIconFilterSharp.vue'
import BrIconFilter from './BrIconFilter.vue'

export default {
  install(app: App) {
    app.component(BrIconFilterOutline.name, BrIconFilterOutline)
    app.component(BrIconFilterSharp.name, BrIconFilterSharp)
    app.component(BrIconFilter.name, BrIconFilter)
  },
} as Plugin

export { BrIconFilterOutline, BrIconFilterSharp, BrIconFilter }

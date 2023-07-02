import { App, Plugin } from 'vue'
import BrIconColorFilterOutline from './BrIconColorFilterOutline.vue'
import BrIconColorFilterSharp from './BrIconColorFilterSharp.vue'
import BrIconColorFilter from './BrIconColorFilter.vue'

export default {
  install(app: App) {
    app.component(BrIconColorFilterOutline.name, BrIconColorFilterOutline)
    app.component(BrIconColorFilterSharp.name, BrIconColorFilterSharp)
    app.component(BrIconColorFilter.name, BrIconColorFilter)
  },
} as Plugin

export { BrIconColorFilterOutline, BrIconColorFilterSharp, BrIconColorFilter }

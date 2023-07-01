import { App, Plugin } from 'vue'
import BrIconWatchOutline from './BrIconWatchOutline.vue'
import BrIconWatchSharp from './BrIconWatchSharp.vue'
import BrIconWatch from './BrIconWatch.vue'

export default {
  install(app: App) {
    app.component(BrIconWatchOutline.name, BrIconWatchOutline)
    app.component(BrIconWatchSharp.name, BrIconWatchSharp)
    app.component(BrIconWatch.name, BrIconWatch)
  },
} as Plugin

export { BrIconWatchOutline, BrIconWatchSharp, BrIconWatch }

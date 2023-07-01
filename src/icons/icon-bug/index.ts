import { App, Plugin } from 'vue'
import BrIconBugOutline from './BrIconBugOutline.vue'
import BrIconBugSharp from './BrIconBugSharp.vue'
import BrIconBug from './BrIconBug.vue'

export default {
  install(app: App) {
    app.component(BrIconBugOutline.name, BrIconBugOutline)
    app.component(BrIconBugSharp.name, BrIconBugSharp)
    app.component(BrIconBug.name, BrIconBug)
  },
} as Plugin

export { BrIconBugOutline, BrIconBugSharp, BrIconBug }

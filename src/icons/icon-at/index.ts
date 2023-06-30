import { App, Plugin } from 'vue'
import BrIconAt from './BrIconAt.vue'
import BrIconAtOutline from './BrIconAtOutline.vue'
import BrIconAtSharp from './BrIconAtSharp.vue'

export default {
  install(app: App) {
    app.component(BrIconAt.name, BrIconAt)
    app.component(BrIconAtOutline.name, BrIconAtOutline)
    app.component(BrIconAtSharp.name, BrIconAtSharp)
  },
} as Plugin

export { BrIconAt, BrIconAtOutline, BrIconAtSharp }

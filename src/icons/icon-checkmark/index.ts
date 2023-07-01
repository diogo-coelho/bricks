import { App, Plugin } from 'vue'
import BrIconCheckmarkOutline from './BrIconCheckmarkOutline.vue'
import BrIconCheckmarkSharp from './BrIconCheckmarkSharp.vue'
import BrIconCheckmark from './BrIconCheckmark.vue'

export default {
  install(app: App) {
    app.component(BrIconCheckmarkOutline.name, BrIconCheckmarkOutline)
    app.component(BrIconCheckmarkSharp.name, BrIconCheckmarkSharp)
    app.component(BrIconCheckmark.name, BrIconCheckmark)
  },
} as Plugin

export { BrIconCheckmarkOutline, BrIconCheckmarkSharp, BrIconCheckmark }

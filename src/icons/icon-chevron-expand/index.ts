import { App, Plugin } from 'vue'
import BrIconChevronExpandOutline from './BrIconChevronExpandOutline.vue'
import BrIconChevronExpandSharp from './BrIconChevronExpandSharp.vue'
import BrIconChevronExpand from './BrIconChevronExpand.vue'

export default {
  install(app: App) {
    app.component(BrIconChevronExpandOutline.name, BrIconChevronExpandOutline)
    app.component(BrIconChevronExpandSharp.name, BrIconChevronExpandSharp)
    app.component(BrIconChevronExpand.name, BrIconChevronExpand)
  },
} as Plugin

export {
  BrIconChevronExpandOutline,
  BrIconChevronExpandSharp,
  BrIconChevronExpand,
}

import { App, Plugin } from 'vue'
import BrIconChevronBackOutline from './BrIconChevronBackOutline.vue'
import BrIconChevronBackSharp from './BrIconChevronBackSharp.vue'
import BrIconChevronBack from './BrIconChevronBack.vue'

export default {
  install(app: App) {
    app.component(BrIconChevronBackOutline.name, BrIconChevronBackOutline)
    app.component(BrIconChevronBackSharp.name, BrIconChevronBackSharp)
    app.component(BrIconChevronBack.name, BrIconChevronBack)
  },
} as Plugin

export { BrIconChevronBackOutline, BrIconChevronBackSharp, BrIconChevronBack }

import { App, Plugin } from 'vue'
import BrIconChevronUpOutline from './BrIconChevronUpOutline.vue'
import BrIconChevronUpSharp from './BrIconChevronUpSharp.vue'
import BrIconChevronUp from './BrIconChevronUp.vue'

export default {
  install(app: App) {
    app.component(BrIconChevronUpOutline.name, BrIconChevronUpOutline)
    app.component(BrIconChevronUpSharp.name, BrIconChevronUpSharp)
    app.component(BrIconChevronUp.name, BrIconChevronUp)
  },
} as Plugin

export { BrIconChevronUpOutline, BrIconChevronUpSharp, BrIconChevronUp }

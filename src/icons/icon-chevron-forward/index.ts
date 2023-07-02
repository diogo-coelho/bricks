import { App, Plugin } from 'vue'
import BrIconChevronForwardOutline from './BrIconChevronForwardOutline.vue'
import BrIconChevronForwardSharp from './BrIconChevronForwardSharp.vue'
import BrIconChevronForward from './BrIconChevronForward.vue'

export default {
  install(app: App) {
    app.component(BrIconChevronForwardOutline.name, BrIconChevronForwardOutline)
    app.component(BrIconChevronForwardSharp.name, BrIconChevronForwardSharp)
    app.component(BrIconChevronForward.name, BrIconChevronForward)
  },
} as Plugin

export {
  BrIconChevronForwardOutline,
  BrIconChevronForwardSharp,
  BrIconChevronForward,
}

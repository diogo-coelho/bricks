import { App, Plugin } from 'vue'
import BrIconChevronDownOutline from './BrIconChevronDownOutline.vue'
import BrIconChevronDownSharp from './BrIconChevronDownSharp.vue'
import BrIconChevronDown from './BrIconChevronDown.vue'

export default {
  install(app: App) {
    app.component(BrIconChevronDownOutline.name, BrIconChevronDownOutline)
    app.component(BrIconChevronDownSharp.name, BrIconChevronDownSharp)
    app.component(BrIconChevronDown.name, BrIconChevronDown)
  },
} as Plugin

export { BrIconChevronDownOutline, BrIconChevronDownSharp, BrIconChevronDown }

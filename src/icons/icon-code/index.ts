import { App, Plugin } from 'vue'
import BrIconCodeOutline from './BrIconCodeOutline.vue'
import BrIconCodeSharp from './BrIconCodeSharp.vue'
import BrIconCode from './BrIconCode.vue'

export default {
  install(app: App) {
    app.component(BrIconCodeOutline.name, BrIconCodeOutline)
    app.component(BrIconCodeSharp.name, BrIconCodeSharp)
    app.component(BrIconCode.name, BrIconCode)
  },
} as Plugin

export { BrIconCodeOutline, BrIconCodeSharp, BrIconCode }

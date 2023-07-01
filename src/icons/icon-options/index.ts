import { App, Plugin } from 'vue'
import BrIconOptionsOutline from './BrIconOptionsOutline.vue'
import BrIconOptionsSharp from './BrIconOptionsSharp.vue'
import BrIconOptions from './BrIconOptions.vue'

export default {
  install(app: App) {
    app.component(BrIconOptionsOutline.name, BrIconOptionsOutline)
    app.component(BrIconOptionsSharp.name, BrIconOptionsSharp)
    app.component(BrIconOptions.name, BrIconOptions)
  },
} as Plugin

export { BrIconOptionsOutline, BrIconOptionsSharp, BrIconOptions }

import { App, Plugin } from 'vue'
import BrIconFlashOutline from './BrIconFlashOutline.vue'
import BrIconFlashSharp from './BrIconFlashSharp.vue'
import BrIconFlash from './BrIconFlash.vue'

export default {
  install(app: App) {
    app.component(BrIconFlashOutline.name, BrIconFlashOutline)
    app.component(BrIconFlashSharp.name, BrIconFlashSharp)
    app.component(BrIconFlash.name, BrIconFlash)
  },
} as Plugin

export { BrIconFlashOutline, BrIconFlashSharp, BrIconFlash }

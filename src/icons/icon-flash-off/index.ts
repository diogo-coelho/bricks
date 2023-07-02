import { App, Plugin } from 'vue'
import BrIconFlashOffOutline from './BrIconFlashOffOutline.vue'
import BrIconFlashOffSharp from './BrIconFlashOffSharp.vue'
import BrIconFlashOff from './BrIconFlashOff.vue'

export default {
  install(app: App) {
    app.component(BrIconFlashOffOutline.name, BrIconFlashOffOutline)
    app.component(BrIconFlashOffSharp.name, BrIconFlashOffSharp)
    app.component(BrIconFlashOff.name, BrIconFlashOff)
  },
} as Plugin

export { BrIconFlashOffOutline, BrIconFlashOffSharp, BrIconFlashOff }

import { App, Plugin } from 'vue'
import BrIconFlashlightOutline from './BrIconFlashlightOutline.vue'
import BrIconFlashlightSharp from './BrIconFlashlightSharp.vue'
import BrIconFlashlight from './BrIconFlashlight.vue'

export default {
  install(app: App) {
    app.component(BrIconFlashlightOutline.name, BrIconFlashlightOutline)
    app.component(BrIconFlashlightSharp.name, BrIconFlashlightSharp)
    app.component(BrIconFlashlight.name, BrIconFlashlight)
  },
} as Plugin

export { BrIconFlashlightOutline, BrIconFlashlightSharp, BrIconFlashlight }

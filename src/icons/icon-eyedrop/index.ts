import { App, Plugin } from 'vue'
import BrIconEyedropOutline from './BrIconEyedropOutline.vue'
import BrIconEyedropSharp from './BrIconEyedropSharp.vue'
import BrIconEyedrop from './BrIconEyedrop.vue'

export default {
  install(app: App) {
    app.component(BrIconEyedropOutline.name, BrIconEyedropOutline)
    app.component(BrIconEyedropSharp.name, BrIconEyedropSharp)
    app.component(BrIconEyedrop.name, BrIconEyedrop)
  },
} as Plugin

export { BrIconEyedropOutline, BrIconEyedropSharp, BrIconEyedrop }

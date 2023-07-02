import { App, Plugin } from 'vue'
import BrIconEyeOffOutline from './BrIconEyeOffOutline.vue'
import BrIconEyeOffSharp from './BrIconEyeOffSharp.vue'
import BrIconEyeOff from './BrIconEyeOff.vue'

export default {
  install(app: App) {
    app.component(BrIconEyeOffOutline.name, BrIconEyeOffOutline)
    app.component(BrIconEyeOffSharp.name, BrIconEyeOffSharp)
    app.component(BrIconEyeOff.name, BrIconEyeOff)
  },
} as Plugin

export { BrIconEyeOffOutline, BrIconEyeOffSharp, BrIconEyeOff }

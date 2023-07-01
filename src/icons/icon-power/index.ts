import { App, Plugin } from 'vue'
import BrIconPowerOutline from './BrIconPowerOutline.vue'
import BrIconPowerSharp from './BrIconPowerSharp.vue'
import BrIconPower from './BrIconPower.vue'

export default {
  install(app: App) {
    app.component(BrIconPowerOutline.name, BrIconPowerOutline)
    app.component(BrIconPowerSharp.name, BrIconPowerSharp)
    app.component(BrIconPower.name, BrIconPower)
  },
} as Plugin

export { BrIconPowerOutline, BrIconPowerSharp, BrIconPower }

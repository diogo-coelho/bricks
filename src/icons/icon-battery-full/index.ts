import { App, Plugin } from 'vue'
import BrIconBatteryFullOutline from './BrIconBatteryFullOutline.vue'
import BrIconBatteryFullSharp from './BrIconBatteryFullSharp.vue'
import BrIconBatteryFull from './BrIconBatteryFull.vue'

export default {
  install(app: App) {
    app.component(BrIconBatteryFullOutline.name, BrIconBatteryFullOutline)
    app.component(BrIconBatteryFullSharp.name, BrIconBatteryFullSharp)
    app.component(BrIconBatteryFull.name, BrIconBatteryFull)
  },
} as Plugin

export { BrIconBatteryFullOutline, BrIconBatteryFullSharp, BrIconBatteryFull }

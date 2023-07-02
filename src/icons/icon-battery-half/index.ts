import { App, Plugin } from 'vue'
import BrIconBatteryHalfOutline from './BrIconBatteryHalfOutline.vue'
import BrIconBatteryHalfSharp from './BrIconBatteryHalfSharp.vue'
import BrIconBatteryHalf from './BrIconBatteryHalf.vue'

export default {
  install(app: App) {
    app.component(BrIconBatteryHalfOutline.name, BrIconBatteryHalfOutline)
    app.component(BrIconBatteryHalfSharp.name, BrIconBatteryHalfSharp)
    app.component(BrIconBatteryHalf.name, BrIconBatteryHalf)
  },
} as Plugin

export { BrIconBatteryHalfOutline, BrIconBatteryHalfSharp, BrIconBatteryHalf }

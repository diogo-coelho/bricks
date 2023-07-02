import { App, Plugin } from 'vue'
import BrIconBatteryChargingOutline from './BrIconBatteryChargingOutline.vue'
import BrIconBatteryChargingSharp from './BrIconBatteryChargingSharp.vue'
import BrIconBatteryCharging from './BrIconBatteryCharging.vue'

export default {
  install(app: App) {
    app.component(
      BrIconBatteryChargingOutline.name,
      BrIconBatteryChargingOutline
    )
    app.component(BrIconBatteryChargingSharp.name, BrIconBatteryChargingSharp)
    app.component(BrIconBatteryCharging.name, BrIconBatteryCharging)
  },
} as Plugin

export {
  BrIconBatteryChargingOutline,
  BrIconBatteryChargingSharp,
  BrIconBatteryCharging,
}

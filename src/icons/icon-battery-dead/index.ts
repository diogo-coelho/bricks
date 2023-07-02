import { App, Plugin } from 'vue'
import BrIconBatteryDeadOutline from './BrIconBatteryDeadOutline.vue'
import BrIconBatteryDeadSharp from './BrIconBatteryDeadSharp.vue'
import BrIconBatteryDead from './BrIconBatteryDead.vue'

export default {
  install(app: App) {
    app.component(BrIconBatteryDeadOutline.name, BrIconBatteryDeadOutline)
    app.component(BrIconBatteryDeadSharp.name, BrIconBatteryDeadSharp)
    app.component(BrIconBatteryDead.name, BrIconBatteryDead)
  },
} as Plugin

export { BrIconBatteryDeadOutline, BrIconBatteryDeadSharp, BrIconBatteryDead }

import { App, Plugin } from 'vue'
import BrIconAlarm from './BrIconAlarm.vue'
import BrIconAlarmOutline from './BrIconAlarmOutline.vue'
import BrIconAlarmSharp from './BrIconAlarmSharp.vue'

export default {
  install(app: App) {
    app.component(BrIconAlarm.name, BrIconAlarm)
    app.component(BrIconAlarmOutline.name, BrIconAlarmOutline)
    app.component(BrIconAlarmSharp.name, BrIconAlarmSharp)
  },
} as Plugin

export { BrIconAlarm, BrIconAlarmOutline, BrIconAlarmSharp }

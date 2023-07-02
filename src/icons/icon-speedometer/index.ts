import { App, Plugin } from 'vue'
import BrIconSpeedometerOutline from './BrIconSpeedometerOutline.vue'
import BrIconSpeedometerSharp from './BrIconSpeedometerSharp.vue'
import BrIconSpeedometer from './BrIconSpeedometer.vue'

export default {
  install(app: App) {
    app.component(BrIconSpeedometerOutline.name, BrIconSpeedometerOutline)
    app.component(BrIconSpeedometerSharp.name, BrIconSpeedometerSharp)
    app.component(BrIconSpeedometer.name, BrIconSpeedometer)
  },
} as Plugin

export { BrIconSpeedometerOutline, BrIconSpeedometerSharp, BrIconSpeedometer }

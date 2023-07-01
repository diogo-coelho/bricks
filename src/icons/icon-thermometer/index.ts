import { App, Plugin } from 'vue'
import BrIconThermometerOutline from './BrIconThermometerOutline.vue'
import BrIconThermometerSharp from './BrIconThermometerSharp.vue'
import BrIconThermometer from './BrIconThermometer.vue'

export default {
  install(app: App) {
    app.component(BrIconThermometerOutline.name, BrIconThermometerOutline)
    app.component(BrIconThermometerSharp.name, BrIconThermometerSharp)
    app.component(BrIconThermometer.name, BrIconThermometer)
  },
} as Plugin

export { BrIconThermometerOutline, BrIconThermometerSharp, BrIconThermometer }

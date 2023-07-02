import { App, Plugin } from 'vue'
import BrIconHourglassOutline from './BrIconHourglassOutline.vue'
import BrIconHourglassSharp from './BrIconHourglassSharp.vue'
import BrIconHourglass from './BrIconHourglass.vue'

export default {
  install(app: App) {
    app.component(BrIconHourglassOutline.name, BrIconHourglassOutline)
    app.component(BrIconHourglassSharp.name, BrIconHourglassSharp)
    app.component(BrIconHourglass.name, BrIconHourglass)
  },
} as Plugin

export { BrIconHourglassOutline, BrIconHourglassSharp, BrIconHourglass }

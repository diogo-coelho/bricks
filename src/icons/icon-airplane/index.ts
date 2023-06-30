import { App, Plugin } from 'vue'
import BrIconAirplane from './BrIconAirplane.vue'
import BrIconAirplaneOutline from './BrIconAirplaneOutline.vue'
import BrIconAirplaneSharp from './BrIconAirplaneSharp.vue'

export default {
  install(app: App) {
    app.component(BrIconAirplane.name, BrIconAirplane)
    app.component(BrIconAirplaneOutline.name, BrIconAirplaneOutline)
    app.component(BrIconAirplaneSharp.name, BrIconAirplaneSharp)
  },
} as Plugin

export { BrIconAirplane, BrIconAirplaneOutline, BrIconAirplaneSharp }

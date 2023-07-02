import { App, Plugin } from 'vue'
import BrIconBicycleOutline from './BrIconBicycleOutline.vue'
import BrIconBicycleSharp from './BrIconBicycleSharp.vue'
import BrIconBicycle from './BrIconBicycle.vue'

export default {
  install(app: App) {
    app.component(BrIconBicycleOutline.name, BrIconBicycleOutline)
    app.component(BrIconBicycleSharp.name, BrIconBicycleSharp)
    app.component(BrIconBicycle.name, BrIconBicycle)
  },
} as Plugin

export { BrIconBicycleOutline, BrIconBicycleSharp, BrIconBicycle }

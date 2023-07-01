import { App, Plugin } from 'vue'
import BrIconCarOutline from './BrIconCarOutline.vue'
import BrIconCarSharp from './BrIconCarSharp.vue'
import BrIconCar from './BrIconCar.vue'

export default {
  install(app: App) {
    app.component(BrIconCarOutline.name, BrIconCarOutline)
    app.component(BrIconCarSharp.name, BrIconCarSharp)
    app.component(BrIconCar.name, BrIconCar)
  },
} as Plugin

export { BrIconCarOutline, BrIconCarSharp, BrIconCar }

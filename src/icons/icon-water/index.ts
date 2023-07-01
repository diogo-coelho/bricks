import { App, Plugin } from 'vue'
import BrIconWaterOutline from './BrIconWaterOutline.vue'
import BrIconWaterSharp from './BrIconWaterSharp.vue'
import BrIconWater from './BrIconWater.vue'

export default {
  install(app: App) {
    app.component(BrIconWaterOutline.name, BrIconWaterOutline)
    app.component(BrIconWaterSharp.name, BrIconWaterSharp)
    app.component(BrIconWater.name, BrIconWater)
  },
} as Plugin

export { BrIconWaterOutline, BrIconWaterSharp, BrIconWater }

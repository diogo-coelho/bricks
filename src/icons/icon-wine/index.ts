import { App, Plugin } from 'vue'
import BrIconWineOutline from './BrIconWineOutline.vue'
import BrIconWineSharp from './BrIconWineSharp.vue'
import BrIconWine from './BrIconWine.vue'

export default {
  install(app: App) {
    app.component(BrIconWineOutline.name, BrIconWineOutline)
    app.component(BrIconWineSharp.name, BrIconWineSharp)
    app.component(BrIconWine.name, BrIconWine)
  },
} as Plugin

export { BrIconWineOutline, BrIconWineSharp, BrIconWine }

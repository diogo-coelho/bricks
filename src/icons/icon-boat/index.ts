import { App, Plugin } from 'vue'
import BrIconBoatOutline from './BrIconBoatOutline.vue'
import BrIconBoatSharp from './BrIconBoatSharp.vue'
import BrIconBoat from './BrIconBoat.vue'

export default {
  install(app: App) {
    app.component(BrIconBoatOutline.name, BrIconBoatOutline)
    app.component(BrIconBoatSharp.name, BrIconBoatSharp)
    app.component(BrIconBoat.name, BrIconBoat)
  },
} as Plugin

export { BrIconBoatOutline, BrIconBoatSharp, BrIconBoat }

import { App, Plugin } from 'vue'
import BrIconBeakerOutline from './BrIconBeakerOutline.vue'
import BrIconBeakerSharp from './BrIconBeakerSharp.vue'
import BrIconBeaker from './BrIconBeaker.vue'

export default {
  install(app: App) {
    app.component(BrIconBeakerOutline.name, BrIconBeakerOutline)
    app.component(BrIconBeakerSharp.name, BrIconBeakerSharp)
    app.component(BrIconBeaker.name, BrIconBeaker)
  },
} as Plugin

export { BrIconBeakerOutline, BrIconBeakerSharp, BrIconBeaker }

import { App, Plugin } from 'vue'
import BrIconRocketOutline from './BrIconRocketOutline.vue'
import BrIconRocketSharp from './BrIconRocketSharp.vue'
import BrIconRocket from './BrIconRocket.vue'

export default {
  install(app: App) {
    app.component(BrIconRocketOutline.name, BrIconRocketOutline)
    app.component(BrIconRocketSharp.name, BrIconRocketSharp)
    app.component(BrIconRocket.name, BrIconRocket)
  },
} as Plugin

export { BrIconRocketOutline, BrIconRocketSharp, BrIconRocket }

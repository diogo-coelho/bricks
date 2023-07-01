import { App, Plugin } from 'vue'
import BrIconShieldCheckmarkOutline from './BrIconShieldCheckmarkOutline.vue'
import BrIconShieldCheckmarkSharp from './BrIconShieldCheckmarkSharp.vue'
import BrIconShieldCheckmark from './BrIconShieldCheckmark.vue'

export default {
  install(app: App) {
    app.component(
      BrIconShieldCheckmarkOutline.name,
      BrIconShieldCheckmarkOutline
    )
    app.component(BrIconShieldCheckmarkSharp.name, BrIconShieldCheckmarkSharp)
    app.component(BrIconShieldCheckmark.name, BrIconShieldCheckmark)
  },
} as Plugin

export {
  BrIconShieldCheckmarkOutline,
  BrIconShieldCheckmarkSharp,
  BrIconShieldCheckmark,
}

import { App, Plugin } from 'vue'
import BrIconShieldOutline from './BrIconShieldOutline.vue'
import BrIconShieldSharp from './BrIconShieldSharp.vue'
import BrIconShield from './BrIconShield.vue'

export default {
  install(app: App) {
    app.component(BrIconShieldOutline.name, BrIconShieldOutline)
    app.component(BrIconShieldSharp.name, BrIconShieldSharp)
    app.component(BrIconShield.name, BrIconShield)
  },
} as Plugin

export { BrIconShieldOutline, BrIconShieldSharp, BrIconShield }

import { App, Plugin } from 'vue'
import BrIconShieldHalfOutline from './BrIconShieldHalfOutline.vue'
import BrIconShieldHalfSharp from './BrIconShieldHalfSharp.vue'
import BrIconShieldHalf from './BrIconShieldHalf.vue'

export default {
  install(app: App) {
    app.component(BrIconShieldHalfOutline.name, BrIconShieldHalfOutline)
    app.component(BrIconShieldHalfSharp.name, BrIconShieldHalfSharp)
    app.component(BrIconShieldHalf.name, BrIconShieldHalf)
  },
} as Plugin

export { BrIconShieldHalfOutline, BrIconShieldHalfSharp, BrIconShieldHalf }

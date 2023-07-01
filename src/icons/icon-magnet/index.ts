import { App, Plugin } from 'vue'
import BrIconMagnetOutline from './BrIconMagnetOutline.vue'
import BrIconMagnetSharp from './BrIconMagnetSharp.vue'
import BrIconMagnet from './BrIconMagnet.vue'

export default {
  install(app: App) {
    app.component(BrIconMagnetOutline.name, BrIconMagnetOutline)
    app.component(BrIconMagnetSharp.name, BrIconMagnetSharp)
    app.component(BrIconMagnet.name, BrIconMagnet)
  },
} as Plugin

export { BrIconMagnetOutline, BrIconMagnetSharp, BrIconMagnet }

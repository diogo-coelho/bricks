import { App, Plugin } from 'vue'
import BrIconCogOutline from './BrIconCogOutline.vue'
import BrIconCogSharp from './BrIconCogSharp.vue'
import BrIconCog from './BrIconCog.vue'

export default {
  install(app: App) {
    app.component(BrIconCogOutline.name, BrIconCogOutline)
    app.component(BrIconCogSharp.name, BrIconCogSharp)
    app.component(BrIconCog.name, BrIconCog)
  },
} as Plugin

export { BrIconCogOutline, BrIconCogSharp, BrIconCog }

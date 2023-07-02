import { App, Plugin } from 'vue'
import BrIconMedkitOutline from './BrIconMedkitOutline.vue'
import BrIconMedkitSharp from './BrIconMedkitSharp.vue'
import BrIconMedkit from './BrIconMedkit.vue'

export default {
  install(app: App) {
    app.component(BrIconMedkitOutline.name, BrIconMedkitOutline)
    app.component(BrIconMedkitSharp.name, BrIconMedkitSharp)
    app.component(BrIconMedkit.name, BrIconMedkit)
  },
} as Plugin

export { BrIconMedkitOutline, BrIconMedkitSharp, BrIconMedkit }

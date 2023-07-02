import { App, Plugin } from 'vue'
import BrIconMaleOutline from './BrIconMaleOutline.vue'
import BrIconMaleSharp from './BrIconMaleSharp.vue'
import BrIconMale from './BrIconMale.vue'

export default {
  install(app: App) {
    app.component(BrIconMaleOutline.name, BrIconMaleOutline)
    app.component(BrIconMaleSharp.name, BrIconMaleSharp)
    app.component(BrIconMale.name, BrIconMale)
  },
} as Plugin

export { BrIconMaleOutline, BrIconMaleSharp, BrIconMale }

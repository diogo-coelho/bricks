import { App, Plugin } from 'vue'
import BrIconMaleFemaleOutline from './BrIconMaleFemaleOutline.vue'
import BrIconMaleFemaleSharp from './BrIconMaleFemaleSharp.vue'
import BrIconMaleFemale from './BrIconMaleFemale.vue'

export default {
  install(app: App) {
    app.component(BrIconMaleFemaleOutline.name, BrIconMaleFemaleOutline)
    app.component(BrIconMaleFemaleSharp.name, BrIconMaleFemaleSharp)
    app.component(BrIconMaleFemale.name, BrIconMaleFemale)
  },
} as Plugin

export { BrIconMaleFemaleOutline, BrIconMaleFemaleSharp, BrIconMaleFemale }

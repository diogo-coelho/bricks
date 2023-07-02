import { App, Plugin } from 'vue'
import BrIconKeyOutline from './BrIconKeyOutline.vue'
import BrIconKeySharp from './BrIconKeySharp.vue'
import BrIconKey from './BrIconKey.vue'

export default {
  install(app: App) {
    app.component(BrIconKeyOutline.name, BrIconKeyOutline)
    app.component(BrIconKeySharp.name, BrIconKeySharp)
    app.component(BrIconKey.name, BrIconKey)
  },
} as Plugin

export { BrIconKeyOutline, BrIconKeySharp, BrIconKey }

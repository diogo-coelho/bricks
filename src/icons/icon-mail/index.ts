import { App, Plugin } from 'vue'
import BrIconMailOutline from './BrIconMailOutline.vue'
import BrIconMailSharp from './BrIconMailSharp.vue'
import BrIconMail from './BrIconMail.vue'

export default {
  install(app: App) {
    app.component(BrIconMailOutline.name, BrIconMailOutline)
    app.component(BrIconMailSharp.name, BrIconMailSharp)
    app.component(BrIconMail.name, BrIconMail)
  },
} as Plugin

export { BrIconMailOutline, BrIconMailSharp, BrIconMail }

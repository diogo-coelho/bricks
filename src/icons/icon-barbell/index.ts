import { App, Plugin } from 'vue'
import BrIconBarbellOutline from './BrIconBarbellOutline.vue'
import BrIconBarbellSharp from './BrIconBarbellSharp.vue'
import BrIconBarbell from './BrIconBarbell.vue'

export default {
  install(app: App) {
    app.component(BrIconBarbellOutline.name, BrIconBarbellOutline)
    app.component(BrIconBarbellSharp.name, BrIconBarbellSharp)
    app.component(BrIconBarbell.name, BrIconBarbell)
  },
} as Plugin

export { BrIconBarbellOutline, BrIconBarbellSharp, BrIconBarbell }

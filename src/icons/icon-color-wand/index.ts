import { App, Plugin } from 'vue'
import BrIconColorWandOutline from './BrIconColorWandOutline.vue'
import BrIconColorWandSharp from './BrIconColorWandSharp.vue'
import BrIconColorWand from './BrIconColorWand.vue'

export default {
  install(app: App) {
    app.component(BrIconColorWandOutline.name, BrIconColorWandOutline)
    app.component(BrIconColorWandSharp.name, BrIconColorWandSharp)
    app.component(BrIconColorWand.name, BrIconColorWand)
  },
} as Plugin

export { BrIconColorWandOutline, BrIconColorWandSharp, BrIconColorWand }

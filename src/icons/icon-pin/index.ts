import { App, Plugin } from 'vue'
import BrIconPinOutline from './BrIconPinOutline.vue'
import BrIconPinSharp from './BrIconPinSharp.vue'
import BrIconPin from './BrIconPin.vue'

export default {
  install(app: App) {
    app.component(BrIconPinOutline.name, BrIconPinOutline)
    app.component(BrIconPinSharp.name, BrIconPinSharp)
    app.component(BrIconPin.name, BrIconPin)
  },
} as Plugin

export { BrIconPinOutline, BrIconPinSharp, BrIconPin }

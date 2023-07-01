import { App, Plugin } from 'vue'
import BrIconInvertModeOutline from './BrIconInvertModeOutline.vue'
import BrIconInvertModeSharp from './BrIconInvertModeSharp.vue'
import BrIconInvertMode from './BrIconInvertMode.vue'

export default {
  install(app: App) {
    app.component(BrIconInvertModeOutline.name, BrIconInvertModeOutline)
    app.component(BrIconInvertModeSharp.name, BrIconInvertModeSharp)
    app.component(BrIconInvertMode.name, BrIconInvertMode)
  },
} as Plugin

export { BrIconInvertModeOutline, BrIconInvertModeSharp, BrIconInvertMode }

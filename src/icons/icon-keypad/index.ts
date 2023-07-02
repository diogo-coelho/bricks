import { App, Plugin } from 'vue'
import BrIconKeypadOutline from './BrIconKeypadOutline.vue'
import BrIconKeypadSharp from './BrIconKeypadSharp.vue'
import BrIconKeypad from './BrIconKeypad.vue'

export default {
  install(app: App) {
    app.component(BrIconKeypadOutline.name, BrIconKeypadOutline)
    app.component(BrIconKeypadSharp.name, BrIconKeypadSharp)
    app.component(BrIconKeypad.name, BrIconKeypad)
  },
} as Plugin

export { BrIconKeypadOutline, BrIconKeypadSharp, BrIconKeypad }

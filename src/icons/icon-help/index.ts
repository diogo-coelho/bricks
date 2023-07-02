import { App, Plugin } from 'vue'
import BrIconHelpOutline from './BrIconHelpOutline.vue'
import BrIconHelpSharp from './BrIconHelpSharp.vue'
import BrIconHelp from './BrIconHelp.vue'

export default {
  install(app: App) {
    app.component(BrIconHelpOutline.name, BrIconHelpOutline)
    app.component(BrIconHelpSharp.name, BrIconHelpSharp)
    app.component(BrIconHelp.name, BrIconHelp)
  },
} as Plugin

export { BrIconHelpOutline, BrIconHelpSharp, BrIconHelp }

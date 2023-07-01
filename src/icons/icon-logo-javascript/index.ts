import { App, Plugin } from 'vue'
import BrIconLogoJavascript from './BrIconLogoJavascript.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoJavascript.name, BrIconLogoJavascript)
  },
} as Plugin

export { BrIconLogoJavascript }

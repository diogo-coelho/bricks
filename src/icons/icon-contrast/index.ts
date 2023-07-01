import { App, Plugin } from 'vue'
import BrIconContrastOutline from './BrIconContrastOutline.vue'
import BrIconContrastSharp from './BrIconContrastSharp.vue'
import BrIconContrast from './BrIconContrast.vue'

export default {
  install(app: App) {
    app.component(BrIconContrastOutline.name, BrIconContrastOutline)
    app.component(BrIconContrastSharp.name, BrIconContrastSharp)
    app.component(BrIconContrast.name, BrIconContrast)
  },
} as Plugin

export { BrIconContrastOutline, BrIconContrastSharp, BrIconContrast }

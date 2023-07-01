import { App, Plugin } from 'vue'
import BrIconLanguageOutline from './BrIconLanguageOutline.vue'
import BrIconLanguageSharp from './BrIconLanguageSharp.vue'
import BrIconLanguage from './BrIconLanguage.vue'

export default {
  install(app: App) {
    app.component(BrIconLanguageOutline.name, BrIconLanguageOutline)
    app.component(BrIconLanguageSharp.name, BrIconLanguageSharp)
    app.component(BrIconLanguage.name, BrIconLanguage)
  },
} as Plugin

export { BrIconLanguageOutline, BrIconLanguageSharp, BrIconLanguage }

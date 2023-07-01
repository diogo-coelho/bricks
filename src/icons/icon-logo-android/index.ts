import { App, Plugin } from 'vue'
import BrIconLogoAndroid from './BrIconLogoAndroid.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoAndroid.name, BrIconLogoAndroid)
  },
} as Plugin

export { BrIconLogoAndroid }

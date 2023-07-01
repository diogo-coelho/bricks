import { App, Plugin } from 'vue'
import BrIconLogoAmplify from './BrIconLogoAmplify.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoAmplify.name, BrIconLogoAmplify)
  },
} as Plugin

export { BrIconLogoAmplify }

import { App, Plugin } from 'vue'
import BrIconLogoFigma from './BrIconLogoFigma.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoFigma.name, BrIconLogoFigma)
  },
} as Plugin

export { BrIconLogoFigma }

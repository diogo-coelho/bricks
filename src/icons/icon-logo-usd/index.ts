import { App, Plugin } from 'vue'
import BrIconLogoUsd from './BrIconLogoUsd.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoUsd.name, BrIconLogoUsd)
  },
} as Plugin

export { BrIconLogoUsd }

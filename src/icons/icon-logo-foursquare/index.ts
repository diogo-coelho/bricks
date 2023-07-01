import { App, Plugin } from 'vue'
import BrIconLogoFoursquare from './BrIconLogoFoursquare.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoFoursquare.name, BrIconLogoFoursquare)
  },
} as Plugin

export { BrIconLogoFoursquare }

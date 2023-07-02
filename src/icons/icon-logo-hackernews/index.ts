import { App, Plugin } from 'vue'
import BrIconLogoHackernews from './BrIconLogoHackernews.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoHackernews.name, BrIconLogoHackernews)
  },
} as Plugin

export { BrIconLogoHackernews }

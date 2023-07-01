import { App, Plugin } from 'vue'
import BrIconLogoSoundcloud from './BrIconLogoSoundcloud.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoSoundcloud.name, BrIconLogoSoundcloud)
  },
} as Plugin

export { BrIconLogoSoundcloud }

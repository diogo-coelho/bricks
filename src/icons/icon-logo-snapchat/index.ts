import { App, Plugin } from 'vue'
import BrIconLogoSnapchat from './BrIconLogoSnapchat.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoSnapchat.name, BrIconLogoSnapchat)
  },
} as Plugin

export { BrIconLogoSnapchat }

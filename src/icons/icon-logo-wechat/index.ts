import { App, Plugin } from 'vue'
import BrIconLogoWechat from './BrIconLogoWechat.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoWechat.name, BrIconLogoWechat)
  },
} as Plugin

export { BrIconLogoWechat }

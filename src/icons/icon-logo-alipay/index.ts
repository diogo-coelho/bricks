import { App, Plugin } from 'vue'
import BrIconLogoAlipay from './BrIconLogoAlipay.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoAlipay.name, BrIconLogoAlipay)
  },
} as Plugin

export { BrIconLogoAlipay }

import { App, Plugin } from 'vue'
import BrIconLogoBitcoin from './BrIconLogoBitcoin.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoBitcoin.name, BrIconLogoBitcoin)
  },
} as Plugin

export { BrIconLogoBitcoin }

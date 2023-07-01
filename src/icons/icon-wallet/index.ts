import { App, Plugin } from 'vue'
import BrIconWalletOutline from './BrIconWalletOutline.vue'
import BrIconWalletSharp from './BrIconWalletSharp.vue'
import BrIconWallet from './BrIconWallet.vue'

export default {
  install(app: App) {
    app.component(BrIconWalletOutline.name, BrIconWalletOutline)
    app.component(BrIconWalletSharp.name, BrIconWalletSharp)
    app.component(BrIconWallet.name, BrIconWallet)
  },
} as Plugin

export { BrIconWalletOutline, BrIconWalletSharp, BrIconWallet }

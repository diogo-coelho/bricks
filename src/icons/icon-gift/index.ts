import { App, Plugin } from 'vue'
import BrIconGiftOutline from './BrIconGiftOutline.vue'
import BrIconGiftSharp from './BrIconGiftSharp.vue'
import BrIconGift from './BrIconGift.vue'

export default {
  install(app: App) {
    app.component(BrIconGiftOutline.name, BrIconGiftOutline)
    app.component(BrIconGiftSharp.name, BrIconGiftSharp)
    app.component(BrIconGift.name, BrIconGift)
  },
} as Plugin

export { BrIconGiftOutline, BrIconGiftSharp, BrIconGift }

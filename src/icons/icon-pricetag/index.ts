import { App, Plugin } from 'vue'
import BrIconPricetagOutline from './BrIconPricetagOutline.vue'
import BrIconPricetagSharp from './BrIconPricetagSharp.vue'
import BrIconPricetag from './BrIconPricetag.vue'

export default {
  install(app: App) {
    app.component(BrIconPricetagOutline.name, BrIconPricetagOutline)
    app.component(BrIconPricetagSharp.name, BrIconPricetagSharp)
    app.component(BrIconPricetag.name, BrIconPricetag)
  },
} as Plugin

export { BrIconPricetagOutline, BrIconPricetagSharp, BrIconPricetag }

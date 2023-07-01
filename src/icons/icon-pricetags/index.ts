import { App, Plugin } from 'vue'
import BrIconPricetagsOutline from './BrIconPricetagsOutline.vue'
import BrIconPricetagsSharp from './BrIconPricetagsSharp.vue'
import BrIconPricetags from './BrIconPricetags.vue'

export default {
  install(app: App) {
    app.component(BrIconPricetagsOutline.name, BrIconPricetagsOutline)
    app.component(BrIconPricetagsSharp.name, BrIconPricetagsSharp)
    app.component(BrIconPricetags.name, BrIconPricetags)
  },
} as Plugin

export { BrIconPricetagsOutline, BrIconPricetagsSharp, BrIconPricetags }

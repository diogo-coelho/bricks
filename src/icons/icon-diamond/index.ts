import { App, Plugin } from 'vue'
import BrIconDiamondOutline from './BrIconDiamondOutline.vue'
import BrIconDiamondSharp from './BrIconDiamondSharp.vue'
import BrIconDiamond from './BrIconDiamond.vue'

export default {
  install(app: App) {
    app.component(BrIconDiamondOutline.name, BrIconDiamondOutline)
    app.component(BrIconDiamondSharp.name, BrIconDiamondSharp)
    app.component(BrIconDiamond.name, BrIconDiamond)
  },
} as Plugin

export { BrIconDiamondOutline, BrIconDiamondSharp, BrIconDiamond }

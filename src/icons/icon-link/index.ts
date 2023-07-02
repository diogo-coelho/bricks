import { App, Plugin } from 'vue'
import BrIconLinkOutline from './BrIconLinkOutline.vue'
import BrIconLinkSharp from './BrIconLinkSharp.vue'
import BrIconLink from './BrIconLink.vue'

export default {
  install(app: App) {
    app.component(BrIconLinkOutline.name, BrIconLinkOutline)
    app.component(BrIconLinkSharp.name, BrIconLinkSharp)
    app.component(BrIconLink.name, BrIconLink)
  },
} as Plugin

export { BrIconLinkOutline, BrIconLinkSharp, BrIconLink }

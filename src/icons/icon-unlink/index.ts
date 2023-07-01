import { App, Plugin } from 'vue'
import BrIconUnlinkOutline from './BrIconUnlinkOutline.vue'
import BrIconUnlinkSharp from './BrIconUnlinkSharp.vue'
import BrIconUnlink from './BrIconUnlink.vue'

export default {
  install(app: App) {
    app.component(BrIconUnlinkOutline.name, BrIconUnlinkOutline)
    app.component(BrIconUnlinkSharp.name, BrIconUnlinkSharp)
    app.component(BrIconUnlink.name, BrIconUnlink)
  },
} as Plugin

export { BrIconUnlinkOutline, BrIconUnlinkSharp, BrIconUnlink }

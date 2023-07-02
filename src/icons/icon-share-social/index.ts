import { App, Plugin } from 'vue'
import BrIconShareSocialOutline from './BrIconShareSocialOutline.vue'
import BrIconShareSocialSharp from './BrIconShareSocialSharp.vue'
import BrIconShareSocial from './BrIconShareSocial.vue'

export default {
  install(app: App) {
    app.component(BrIconShareSocialOutline.name, BrIconShareSocialOutline)
    app.component(BrIconShareSocialSharp.name, BrIconShareSocialSharp)
    app.component(BrIconShareSocial.name, BrIconShareSocial)
  },
} as Plugin

export { BrIconShareSocialOutline, BrIconShareSocialSharp, BrIconShareSocial }

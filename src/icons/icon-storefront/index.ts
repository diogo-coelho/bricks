import { App, Plugin } from 'vue'
import BrIconStorefrontOutline from './BrIconStorefrontOutline.vue'
import BrIconStorefrontSharp from './BrIconStorefrontSharp.vue'
import BrIconStorefront from './BrIconStorefront.vue'

export default {
  install(app: App) {
    app.component(BrIconStorefrontOutline.name, BrIconStorefrontOutline)
    app.component(BrIconStorefrontSharp.name, BrIconStorefrontSharp)
    app.component(BrIconStorefront.name, BrIconStorefront)
  },
} as Plugin

export { BrIconStorefrontOutline, BrIconStorefrontSharp, BrIconStorefront }

import { App, Plugin } from 'vue'
import BrIconHelpBuoyOutline from './BrIconHelpBuoyOutline.vue'
import BrIconHelpBuoySharp from './BrIconHelpBuoySharp.vue'
import BrIconHelpBuoy from './BrIconHelpBuoy.vue'

export default {
  install(app: App) {
    app.component(BrIconHelpBuoyOutline.name, BrIconHelpBuoyOutline)
    app.component(BrIconHelpBuoySharp.name, BrIconHelpBuoySharp)
    app.component(BrIconHelpBuoy.name, BrIconHelpBuoy)
  },
} as Plugin

export { BrIconHelpBuoyOutline, BrIconHelpBuoySharp, BrIconHelpBuoy }

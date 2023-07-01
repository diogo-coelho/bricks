import { App, Plugin } from 'vue'
import BrIconSettingsOutline from './BrIconSettingsOutline.vue'
import BrIconSettingsSharp from './BrIconSettingsSharp.vue'
import BrIconSettings from './BrIconSettings.vue'

export default {
  install(app: App) {
    app.component(BrIconSettingsOutline.name, BrIconSettingsOutline)
    app.component(BrIconSettingsSharp.name, BrIconSettingsSharp)
    app.component(BrIconSettings.name, BrIconSettings)
  },
} as Plugin

export { BrIconSettingsOutline, BrIconSettingsSharp, BrIconSettings }

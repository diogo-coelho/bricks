import { App, Plugin } from 'vue'
import BrIconTabletLandscapeOutline from './BrIconTabletLandscapeOutline.vue'
import BrIconTabletLandscapeSharp from './BrIconTabletLandscapeSharp.vue'
import BrIconTabletLandscape from './BrIconTabletLandscape.vue'

export default {
  install(app: App) {
    app.component(
      BrIconTabletLandscapeOutline.name,
      BrIconTabletLandscapeOutline
    )
    app.component(BrIconTabletLandscapeSharp.name, BrIconTabletLandscapeSharp)
    app.component(BrIconTabletLandscape.name, BrIconTabletLandscape)
  },
} as Plugin

export {
  BrIconTabletLandscapeOutline,
  BrIconTabletLandscapeSharp,
  BrIconTabletLandscape,
}

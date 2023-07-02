import { App, Plugin } from 'vue'
import BrIconSubwayOutline from './BrIconSubwayOutline.vue'
import BrIconSubwaySharp from './BrIconSubwaySharp.vue'
import BrIconSubway from './BrIconSubway.vue'

export default {
  install(app: App) {
    app.component(BrIconSubwayOutline.name, BrIconSubwayOutline)
    app.component(BrIconSubwaySharp.name, BrIconSubwaySharp)
    app.component(BrIconSubway.name, BrIconSubway)
  },
} as Plugin

export { BrIconSubwayOutline, BrIconSubwaySharp, BrIconSubway }

import { App, Plugin } from 'vue'
import BrIconShirtOutline from './BrIconShirtOutline.vue'
import BrIconShirtSharp from './BrIconShirtSharp.vue'
import BrIconShirt from './BrIconShirt.vue'

export default {
  install(app: App) {
    app.component(BrIconShirtOutline.name, BrIconShirtOutline)
    app.component(BrIconShirtSharp.name, BrIconShirtSharp)
    app.component(BrIconShirt.name, BrIconShirt)
  },
} as Plugin

export { BrIconShirtOutline, BrIconShirtSharp, BrIconShirt }

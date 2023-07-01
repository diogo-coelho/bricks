import { App, Plugin } from 'vue'
import BrIconHeartOutline from './BrIconHeartOutline.vue'
import BrIconHeartSharp from './BrIconHeartSharp.vue'
import BrIconHeart from './BrIconHeart.vue'

export default {
  install(app: App) {
    app.component(BrIconHeartOutline.name, BrIconHeartOutline)
    app.component(BrIconHeartSharp.name, BrIconHeartSharp)
    app.component(BrIconHeart.name, BrIconHeart)
  },
} as Plugin

export { BrIconHeartOutline, BrIconHeartSharp, BrIconHeart }

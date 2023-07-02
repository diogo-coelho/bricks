import { App, Plugin } from 'vue'
import BrIconHeartDislikeOutline from './BrIconHeartDislikeOutline.vue'
import BrIconHeartDislikeSharp from './BrIconHeartDislikeSharp.vue'
import BrIconHeartDislike from './BrIconHeartDislike.vue'

export default {
  install(app: App) {
    app.component(BrIconHeartDislikeOutline.name, BrIconHeartDislikeOutline)
    app.component(BrIconHeartDislikeSharp.name, BrIconHeartDislikeSharp)
    app.component(BrIconHeartDislike.name, BrIconHeartDislike)
  },
} as Plugin

export {
  BrIconHeartDislikeOutline,
  BrIconHeartDislikeSharp,
  BrIconHeartDislike,
}

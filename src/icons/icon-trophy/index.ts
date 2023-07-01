import { App, Plugin } from 'vue'
import BrIconTrophyOutline from './BrIconTrophyOutline.vue'
import BrIconTrophySharp from './BrIconTrophySharp.vue'
import BrIconTrophy from './BrIconTrophy.vue'

export default {
  install(app: App) {
    app.component(BrIconTrophyOutline.name, BrIconTrophyOutline)
    app.component(BrIconTrophySharp.name, BrIconTrophySharp)
    app.component(BrIconTrophy.name, BrIconTrophy)
  },
} as Plugin

export { BrIconTrophyOutline, BrIconTrophySharp, BrIconTrophy }

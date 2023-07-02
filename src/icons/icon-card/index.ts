import { App, Plugin } from 'vue'
import BrIconCardOutline from './BrIconCardOutline.vue'
import BrIconCardSharp from './BrIconCardSharp.vue'
import BrIconCard from './BrIconCard.vue'

export default {
  install(app: App) {
    app.component(BrIconCardOutline.name, BrIconCardOutline)
    app.component(BrIconCardSharp.name, BrIconCardSharp)
    app.component(BrIconCard.name, BrIconCard)
  },
} as Plugin

export { BrIconCardOutline, BrIconCardSharp, BrIconCard }

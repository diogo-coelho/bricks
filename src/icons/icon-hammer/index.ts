import { App, Plugin } from 'vue'
import BrIconHammerOutline from './BrIconHammerOutline.vue'
import BrIconHammerSharp from './BrIconHammerSharp.vue'
import BrIconHammer from './BrIconHammer.vue'

export default {
  install(app: App) {
    app.component(BrIconHammerOutline.name, BrIconHammerOutline)
    app.component(BrIconHammerSharp.name, BrIconHammerSharp)
    app.component(BrIconHammer.name, BrIconHammer)
  },
} as Plugin

export { BrIconHammerOutline, BrIconHammerSharp, BrIconHammer }

import { App, Plugin } from 'vue'
import BrIconSunnyOutline from './BrIconSunnyOutline.vue'
import BrIconSunnySharp from './BrIconSunnySharp.vue'
import BrIconSunny from './BrIconSunny.vue'

export default {
  install(app: App) {
    app.component(BrIconSunnyOutline.name, BrIconSunnyOutline)
    app.component(BrIconSunnySharp.name, BrIconSunnySharp)
    app.component(BrIconSunny.name, BrIconSunny)
  },
} as Plugin

export { BrIconSunnyOutline, BrIconSunnySharp, BrIconSunny }

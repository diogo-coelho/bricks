import { App, Plugin } from 'vue'
import BrIconTransgenderOutline from './BrIconTransgenderOutline.vue'
import BrIconTransgenderSharp from './BrIconTransgenderSharp.vue'
import BrIconTransgender from './BrIconTransgender.vue'

export default {
  install(app: App) {
    app.component(BrIconTransgenderOutline.name, BrIconTransgenderOutline)
    app.component(BrIconTransgenderSharp.name, BrIconTransgenderSharp)
    app.component(BrIconTransgender.name, BrIconTransgender)
  },
} as Plugin

export { BrIconTransgenderOutline, BrIconTransgenderSharp, BrIconTransgender }

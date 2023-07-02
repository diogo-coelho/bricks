import { App, Plugin } from 'vue'
import BrIconPulseOutline from './BrIconPulseOutline.vue'
import BrIconPulseSharp from './BrIconPulseSharp.vue'
import BrIconPulse from './BrIconPulse.vue'

export default {
  install(app: App) {
    app.component(BrIconPulseOutline.name, BrIconPulseOutline)
    app.component(BrIconPulseSharp.name, BrIconPulseSharp)
    app.component(BrIconPulse.name, BrIconPulse)
  },
} as Plugin

export { BrIconPulseOutline, BrIconPulseSharp, BrIconPulse }

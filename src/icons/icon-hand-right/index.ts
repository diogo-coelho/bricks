import { App, Plugin } from 'vue'
import BrIconHandRightOutline from './BrIconHandRightOutline.vue'
import BrIconHandRightSharp from './BrIconHandRightSharp.vue'
import BrIconHandRight from './BrIconHandRight.vue'

export default {
  install(app: App) {
    app.component(BrIconHandRightOutline.name, BrIconHandRightOutline)
    app.component(BrIconHandRightSharp.name, BrIconHandRightSharp)
    app.component(BrIconHandRight.name, BrIconHandRight)
  },
} as Plugin

export { BrIconHandRightOutline, BrIconHandRightSharp, BrIconHandRight }

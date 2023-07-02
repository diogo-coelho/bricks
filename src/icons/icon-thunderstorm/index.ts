import { App, Plugin } from 'vue'
import BrIconThunderstormOutline from './BrIconThunderstormOutline.vue'
import BrIconThunderstormSharp from './BrIconThunderstormSharp.vue'
import BrIconThunderstorm from './BrIconThunderstorm.vue'

export default {
  install(app: App) {
    app.component(BrIconThunderstormOutline.name, BrIconThunderstormOutline)
    app.component(BrIconThunderstormSharp.name, BrIconThunderstormSharp)
    app.component(BrIconThunderstorm.name, BrIconThunderstorm)
  },
} as Plugin

export {
  BrIconThunderstormOutline,
  BrIconThunderstormSharp,
  BrIconThunderstorm,
}

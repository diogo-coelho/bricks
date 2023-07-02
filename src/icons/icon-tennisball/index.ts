import { App, Plugin } from 'vue'
import BrIconTennisballOutline from './BrIconTennisballOutline.vue'
import BrIconTennisballSharp from './BrIconTennisballSharp.vue'
import BrIconTennisball from './BrIconTennisball.vue'

export default {
  install(app: App) {
    app.component(BrIconTennisballOutline.name, BrIconTennisballOutline)
    app.component(BrIconTennisballSharp.name, BrIconTennisballSharp)
    app.component(BrIconTennisball.name, BrIconTennisball)
  },
} as Plugin

export { BrIconTennisballOutline, BrIconTennisballSharp, BrIconTennisball }

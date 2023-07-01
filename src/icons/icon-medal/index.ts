import { App, Plugin } from 'vue'
import BrIconMedalOutline from './BrIconMedalOutline.vue'
import BrIconMedalSharp from './BrIconMedalSharp.vue'
import BrIconMedal from './BrIconMedal.vue'

export default {
  install(app: App) {
    app.component(BrIconMedalOutline.name, BrIconMedalOutline)
    app.component(BrIconMedalSharp.name, BrIconMedalSharp)
    app.component(BrIconMedal.name, BrIconMedal)
  },
} as Plugin

export { BrIconMedalOutline, BrIconMedalSharp, BrIconMedal }

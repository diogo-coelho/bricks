import { App, Plugin } from 'vue'
import BrIconPhoneLandscapeOutline from './BrIconPhoneLandscapeOutline.vue'
import BrIconPhoneLandscapeSharp from './BrIconPhoneLandscapeSharp.vue'
import BrIconPhoneLandscape from './BrIconPhoneLandscape.vue'

export default {
  install(app: App) {
    app.component(BrIconPhoneLandscapeOutline.name, BrIconPhoneLandscapeOutline)
    app.component(BrIconPhoneLandscapeSharp.name, BrIconPhoneLandscapeSharp)
    app.component(BrIconPhoneLandscape.name, BrIconPhoneLandscape)
  },
} as Plugin

export {
  BrIconPhoneLandscapeOutline,
  BrIconPhoneLandscapeSharp,
  BrIconPhoneLandscape,
}

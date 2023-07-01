import { App, Plugin } from 'vue'
import BrIconPhonePortraitOutline from './BrIconPhonePortraitOutline.vue'
import BrIconPhonePortraitSharp from './BrIconPhonePortraitSharp.vue'
import BrIconPhonePortrait from './BrIconPhonePortrait.vue'

export default {
  install(app: App) {
    app.component(BrIconPhonePortraitOutline.name, BrIconPhonePortraitOutline)
    app.component(BrIconPhonePortraitSharp.name, BrIconPhonePortraitSharp)
    app.component(BrIconPhonePortrait.name, BrIconPhonePortrait)
  },
} as Plugin

export {
  BrIconPhonePortraitOutline,
  BrIconPhonePortraitSharp,
  BrIconPhonePortrait,
}

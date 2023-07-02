import { App, Plugin } from 'vue'
import BrIconRadioOutline from './BrIconRadioOutline.vue'
import BrIconRadioSharp from './BrIconRadioSharp.vue'
import BrIconRadio from './BrIconRadio.vue'

export default {
  install(app: App) {
    app.component(BrIconRadioOutline.name, BrIconRadioOutline)
    app.component(BrIconRadioSharp.name, BrIconRadioSharp)
    app.component(BrIconRadio.name, BrIconRadio)
  },
} as Plugin

export { BrIconRadioOutline, BrIconRadioSharp, BrIconRadio }

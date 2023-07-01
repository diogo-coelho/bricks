import { App, Plugin } from 'vue'
import BrIconRadioButtonOnOutline from './BrIconRadioButtonOnOutline.vue'
import BrIconRadioButtonOnSharp from './BrIconRadioButtonOnSharp.vue'
import BrIconRadioButtonOn from './BrIconRadioButtonOn.vue'

export default {
  install(app: App) {
    app.component(BrIconRadioButtonOnOutline.name, BrIconRadioButtonOnOutline)
    app.component(BrIconRadioButtonOnSharp.name, BrIconRadioButtonOnSharp)
    app.component(BrIconRadioButtonOn.name, BrIconRadioButtonOn)
  },
} as Plugin

export {
  BrIconRadioButtonOnOutline,
  BrIconRadioButtonOnSharp,
  BrIconRadioButtonOn,
}

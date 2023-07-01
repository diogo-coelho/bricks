import { App, Plugin } from 'vue'
import BrIconRadioButtonOffOutline from './BrIconRadioButtonOffOutline.vue'
import BrIconRadioButtonOffSharp from './BrIconRadioButtonOffSharp.vue'
import BrIconRadioButtonOff from './BrIconRadioButtonOff.vue'

export default {
  install(app: App) {
    app.component(BrIconRadioButtonOffOutline.name, BrIconRadioButtonOffOutline)
    app.component(BrIconRadioButtonOffSharp.name, BrIconRadioButtonOffSharp)
    app.component(BrIconRadioButtonOff.name, BrIconRadioButtonOff)
  },
} as Plugin

export {
  BrIconRadioButtonOffOutline,
  BrIconRadioButtonOffSharp,
  BrIconRadioButtonOff,
}

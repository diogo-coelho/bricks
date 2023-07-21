import { App, Plugin } from 'vue'
import BrRadio from './BrRadio.vue'
import BrRadioGroup from './BrRadioGroup.vue'

export default {
  install(app: App) {
    app.component(BrRadioGroup.name, BrRadioGroup)
    app.component(BrRadio.name, BrRadio)
  },
} as Plugin

export { BrRadioGroup, BrRadio }

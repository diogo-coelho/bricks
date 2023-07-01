import { App, Plugin } from 'vue'
import BrIconCheckboxOutline from './BrIconCheckboxOutline.vue'
import BrIconCheckboxSharp from './BrIconCheckboxSharp.vue'
import BrIconCheckbox from './BrIconCheckbox.vue'

export default {
  install(app: App) {
    app.component(BrIconCheckboxOutline.name, BrIconCheckboxOutline)
    app.component(BrIconCheckboxSharp.name, BrIconCheckboxSharp)
    app.component(BrIconCheckbox.name, BrIconCheckbox)
  },
} as Plugin

export { BrIconCheckboxOutline, BrIconCheckboxSharp, BrIconCheckbox }

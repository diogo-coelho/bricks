import { App, Plugin } from 'vue'
import BrIconAperture from './BrIconAperture.vue'
import BrIconApertureOutline from './BrIconApertureOutline.vue'
import BrIconApertureSharp from './BrIconApertureSharp.vue'

export default {
  install(app: App) {
    app.component(BrIconAperture.name, BrIconAperture)
    app.component(BrIconApertureOutline.name, BrIconApertureOutline)
    app.component(BrIconApertureSharp.name, BrIconApertureSharp)
  },
} as Plugin

export { BrIconAperture, BrIconApertureOutline, BrIconApertureSharp }

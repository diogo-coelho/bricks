import { App, Plugin } from 'vue'
import BrIconMedicalOutline from './BrIconMedicalOutline.vue'
import BrIconMedicalSharp from './BrIconMedicalSharp.vue'
import BrIconMedical from './BrIconMedical.vue'

export default {
  install(app: App) {
    app.component(BrIconMedicalOutline.name, BrIconMedicalOutline)
    app.component(BrIconMedicalSharp.name, BrIconMedicalSharp)
    app.component(BrIconMedical.name, BrIconMedical)
  },
} as Plugin

export { BrIconMedicalOutline, BrIconMedicalSharp, BrIconMedical }

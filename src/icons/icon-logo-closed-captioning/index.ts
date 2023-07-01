import { App, Plugin } from 'vue'
import BrIconLogoClosedCaptioning from './BrIconLogoClosedCaptioning.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoClosedCaptioning.name, BrIconLogoClosedCaptioning)
  },
} as Plugin

export { BrIconLogoClosedCaptioning }

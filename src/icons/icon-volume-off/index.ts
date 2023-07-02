import { App, Plugin } from 'vue'
import BrIconVolumeOffOutline from './BrIconVolumeOffOutline.vue'
import BrIconVolumeOffSharp from './BrIconVolumeOffSharp.vue'
import BrIconVolumeOff from './BrIconVolumeOff.vue'

export default {
  install(app: App) {
    app.component(BrIconVolumeOffOutline.name, BrIconVolumeOffOutline)
    app.component(BrIconVolumeOffSharp.name, BrIconVolumeOffSharp)
    app.component(BrIconVolumeOff.name, BrIconVolumeOff)
  },
} as Plugin

export { BrIconVolumeOffOutline, BrIconVolumeOffSharp, BrIconVolumeOff }

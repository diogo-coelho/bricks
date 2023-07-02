import { App, Plugin } from 'vue'
import BrIconBedOutline from './BrIconBedOutline.vue'
import BrIconBedSharp from './BrIconBedSharp.vue'
import BrIconBed from './BrIconBed.vue'

export default {
  install(app: App) {
    app.component(BrIconBedOutline.name, BrIconBedOutline)
    app.component(BrIconBedSharp.name, BrIconBedSharp)
    app.component(BrIconBed.name, BrIconBed)
  },
} as Plugin

export { BrIconBedOutline, BrIconBedSharp, BrIconBed }

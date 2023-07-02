import { App, Plugin } from 'vue'
import BrIconInformationOutline from './BrIconInformationOutline.vue'
import BrIconInformationSharp from './BrIconInformationSharp.vue'
import BrIconInformation from './BrIconInformation.vue'

export default {
  install(app: App) {
    app.component(BrIconInformationOutline.name, BrIconInformationOutline)
    app.component(BrIconInformationSharp.name, BrIconInformationSharp)
    app.component(BrIconInformation.name, BrIconInformation)
  },
} as Plugin

export { BrIconInformationOutline, BrIconInformationSharp, BrIconInformation }

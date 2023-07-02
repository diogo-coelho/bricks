import { App, Plugin } from 'vue'
import BrIconContractOutline from './BrIconContractOutline.vue'
import BrIconContractSharp from './BrIconContractSharp.vue'
import BrIconContract from './BrIconContract.vue'

export default {
  install(app: App) {
    app.component(BrIconContractOutline.name, BrIconContractOutline)
    app.component(BrIconContractSharp.name, BrIconContractSharp)
    app.component(BrIconContract.name, BrIconContract)
  },
} as Plugin

export { BrIconContractOutline, BrIconContractSharp, BrIconContract }

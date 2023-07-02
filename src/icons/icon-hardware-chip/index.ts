import { App, Plugin } from 'vue'
import BrIconHardwareChipOutline from './BrIconHardwareChipOutline.vue'
import BrIconHardwareChipSharp from './BrIconHardwareChipSharp.vue'
import BrIconHardwareChip from './BrIconHardwareChip.vue'

export default {
  install(app: App) {
    app.component(BrIconHardwareChipOutline.name, BrIconHardwareChipOutline)
    app.component(BrIconHardwareChipSharp.name, BrIconHardwareChipSharp)
    app.component(BrIconHardwareChip.name, BrIconHardwareChip)
  },
} as Plugin

export {
  BrIconHardwareChipOutline,
  BrIconHardwareChipSharp,
  BrIconHardwareChip,
}

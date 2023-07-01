import { App, Plugin } from 'vue'
import BrIconBluetoothOutline from './BrIconBluetoothOutline.vue'
import BrIconBluetoothSharp from './BrIconBluetoothSharp.vue'
import BrIconBluetooth from './BrIconBluetooth.vue'

export default {
  install(app: App) {
    app.component(BrIconBluetoothOutline.name, BrIconBluetoothOutline)
    app.component(BrIconBluetoothSharp.name, BrIconBluetoothSharp)
    app.component(BrIconBluetooth.name, BrIconBluetooth)
  },
} as Plugin

export { BrIconBluetoothOutline, BrIconBluetoothSharp, BrIconBluetooth }

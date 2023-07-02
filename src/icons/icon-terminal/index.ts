import { App, Plugin } from 'vue'
import BrIconTerminalOutline from './BrIconTerminalOutline.vue'
import BrIconTerminalSharp from './BrIconTerminalSharp.vue'
import BrIconTerminal from './BrIconTerminal.vue'

export default {
  install(app: App) {
    app.component(BrIconTerminalOutline.name, BrIconTerminalOutline)
    app.component(BrIconTerminalSharp.name, BrIconTerminalSharp)
    app.component(BrIconTerminal.name, BrIconTerminal)
  },
} as Plugin

export { BrIconTerminalOutline, BrIconTerminalSharp, BrIconTerminal }

import { App, Plugin } from 'vue'
import BrIconFunnelOutline from './BrIconFunnelOutline.vue'
import BrIconFunnelSharp from './BrIconFunnelSharp.vue'
import BrIconFunnel from './BrIconFunnel.vue'

export default {
  install(app: App) {
    app.component(BrIconFunnelOutline.name, BrIconFunnelOutline)
    app.component(BrIconFunnelSharp.name, BrIconFunnelSharp)
    app.component(BrIconFunnel.name, BrIconFunnel)
  },
} as Plugin

export { BrIconFunnelOutline, BrIconFunnelSharp, BrIconFunnel }

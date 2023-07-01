import { App, Plugin } from 'vue'
import BrIconGitNetworkOutline from './BrIconGitNetworkOutline.vue'
import BrIconGitNetworkSharp from './BrIconGitNetworkSharp.vue'
import BrIconGitNetwork from './BrIconGitNetwork.vue'

export default {
  install(app: App) {
    app.component(BrIconGitNetworkOutline.name, BrIconGitNetworkOutline)
    app.component(BrIconGitNetworkSharp.name, BrIconGitNetworkSharp)
    app.component(BrIconGitNetwork.name, BrIconGitNetwork)
  },
} as Plugin

export { BrIconGitNetworkOutline, BrIconGitNetworkSharp, BrIconGitNetwork }

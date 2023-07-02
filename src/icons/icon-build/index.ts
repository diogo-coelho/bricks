import { App, Plugin } from 'vue'
import BrIconBuildOutline from './BrIconBuildOutline.vue'
import BrIconBuildSharp from './BrIconBuildSharp.vue'
import BrIconBuild from './BrIconBuild.vue'

export default {
  install(app: App) {
    app.component(BrIconBuildOutline.name, BrIconBuildOutline)
    app.component(BrIconBuildSharp.name, BrIconBuildSharp)
    app.component(BrIconBuild.name, BrIconBuild)
  },
} as Plugin

export { BrIconBuildOutline, BrIconBuildSharp, BrIconBuild }

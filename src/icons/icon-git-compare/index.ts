import { App, Plugin } from 'vue'
import BrIconGitCompareOutline from './BrIconGitCompareOutline.vue'
import BrIconGitCompareSharp from './BrIconGitCompareSharp.vue'
import BrIconGitCompare from './BrIconGitCompare.vue'

export default {
  install(app: App) {
    app.component(BrIconGitCompareOutline.name, BrIconGitCompareOutline)
    app.component(BrIconGitCompareSharp.name, BrIconGitCompareSharp)
    app.component(BrIconGitCompare.name, BrIconGitCompare)
  },
} as Plugin

export { BrIconGitCompareOutline, BrIconGitCompareSharp, BrIconGitCompare }

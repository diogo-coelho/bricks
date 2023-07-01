import { App, Plugin } from 'vue'
import BrIconGitMergeOutline from './BrIconGitMergeOutline.vue'
import BrIconGitMergeSharp from './BrIconGitMergeSharp.vue'
import BrIconGitMerge from './BrIconGitMerge.vue'

export default {
  install(app: App) {
    app.component(BrIconGitMergeOutline.name, BrIconGitMergeOutline)
    app.component(BrIconGitMergeSharp.name, BrIconGitMergeSharp)
    app.component(BrIconGitMerge.name, BrIconGitMerge)
  },
} as Plugin

export { BrIconGitMergeOutline, BrIconGitMergeSharp, BrIconGitMerge }

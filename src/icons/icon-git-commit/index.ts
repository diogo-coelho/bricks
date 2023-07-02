import { App, Plugin } from 'vue'
import BrIconGitCommitOutline from './BrIconGitCommitOutline.vue'
import BrIconGitCommitSharp from './BrIconGitCommitSharp.vue'
import BrIconGitCommit from './BrIconGitCommit.vue'

export default {
  install(app: App) {
    app.component(BrIconGitCommitOutline.name, BrIconGitCommitOutline)
    app.component(BrIconGitCommitSharp.name, BrIconGitCommitSharp)
    app.component(BrIconGitCommit.name, BrIconGitCommit)
  },
} as Plugin

export { BrIconGitCommitOutline, BrIconGitCommitSharp, BrIconGitCommit }

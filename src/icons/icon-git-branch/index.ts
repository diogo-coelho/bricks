import { App, Plugin } from 'vue'
import BrIconGitBranchOutline from './BrIconGitBranchOutline.vue'
import BrIconGitBranchSharp from './BrIconGitBranchSharp.vue'
import BrIconGitBranch from './BrIconGitBranch.vue'

export default {
  install(app: App) {
    app.component(BrIconGitBranchOutline.name, BrIconGitBranchOutline)
    app.component(BrIconGitBranchSharp.name, BrIconGitBranchSharp)
    app.component(BrIconGitBranch.name, BrIconGitBranch)
  },
} as Plugin

export { BrIconGitBranchOutline, BrIconGitBranchSharp, BrIconGitBranch }

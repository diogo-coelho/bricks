import { App, Plugin } from 'vue'
import BrIconGitPullRequestOutline from './BrIconGitPullRequestOutline.vue'
import BrIconGitPullRequestSharp from './BrIconGitPullRequestSharp.vue'
import BrIconGitPullRequest from './BrIconGitPullRequest.vue'

export default {
  install(app: App) {
    app.component(BrIconGitPullRequestOutline.name, BrIconGitPullRequestOutline)
    app.component(BrIconGitPullRequestSharp.name, BrIconGitPullRequestSharp)
    app.component(BrIconGitPullRequest.name, BrIconGitPullRequest)
  },
} as Plugin

export {
  BrIconGitPullRequestOutline,
  BrIconGitPullRequestSharp,
  BrIconGitPullRequest,
}

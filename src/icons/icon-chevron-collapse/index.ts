import { App, Plugin } from 'vue'
import BrIconChevronCollapseOutline from './BrIconChevronCollapseOutline.vue'
import BrIconChevronCollapseSharp from './BrIconChevronCollapseSharp.vue'
import BrIconChevronCollapse from './BrIconChevronCollapse.vue'

export default {
  install(app: App) {
    app.component(
      BrIconChevronCollapseOutline.name,
      BrIconChevronCollapseOutline
    )
    app.component(BrIconChevronCollapseSharp.name, BrIconChevronCollapseSharp)
    app.component(BrIconChevronCollapse.name, BrIconChevronCollapse)
  },
} as Plugin

export {
  BrIconChevronCollapseOutline,
  BrIconChevronCollapseSharp,
  BrIconChevronCollapse,
}

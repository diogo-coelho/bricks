import { App, Plugin } from 'vue'
import BrIconBriefcaseOutline from './BrIconBriefcaseOutline.vue'
import BrIconBriefcaseSharp from './BrIconBriefcaseSharp.vue'
import BrIconBriefcase from './BrIconBriefcase.vue'

export default {
  install(app: App) {
    app.component(BrIconBriefcaseOutline.name, BrIconBriefcaseOutline)
    app.component(BrIconBriefcaseSharp.name, BrIconBriefcaseSharp)
    app.component(BrIconBriefcase.name, BrIconBriefcase)
  },
} as Plugin

export { BrIconBriefcaseOutline, BrIconBriefcaseSharp, BrIconBriefcase }

import { App, Plugin } from 'vue'
import BrIconTvOutline from './BrIconTvOutline.vue'
import BrIconTvSharp from './BrIconTvSharp.vue'
import BrIconTv from './BrIconTv.vue'

export default {
  install(app: App) {
    app.component(BrIconTvOutline.name, BrIconTvOutline)
    app.component(BrIconTvSharp.name, BrIconTvSharp)
    app.component(BrIconTv.name, BrIconTv)
  },
} as Plugin

export { BrIconTvOutline, BrIconTvSharp, BrIconTv }

import { App, Plugin } from 'vue'
import BrIconWomanOutline from './BrIconWomanOutline.vue'
import BrIconWomanSharp from './BrIconWomanSharp.vue'
import BrIconWoman from './BrIconWoman.vue'

export default {
  install(app: App) {
    app.component(BrIconWomanOutline.name, BrIconWomanOutline)
    app.component(BrIconWomanSharp.name, BrIconWomanSharp)
    app.component(BrIconWoman.name, BrIconWoman)
  },
} as Plugin

export { BrIconWomanOutline, BrIconWomanSharp, BrIconWoman }

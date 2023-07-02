import { App, Plugin } from 'vue'
import BrIconFemaleOutline from './BrIconFemaleOutline.vue'
import BrIconFemaleSharp from './BrIconFemaleSharp.vue'
import BrIconFemale from './BrIconFemale.vue'

export default {
  install(app: App) {
    app.component(BrIconFemaleOutline.name, BrIconFemaleOutline)
    app.component(BrIconFemaleSharp.name, BrIconFemaleSharp)
    app.component(BrIconFemale.name, BrIconFemale)
  },
} as Plugin

export { BrIconFemaleOutline, BrIconFemaleSharp, BrIconFemale }

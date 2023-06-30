import { App, Plugin } from 'vue'
import BrIconArrowBack from './BrIconArrowBack.vue'
import BrIconArrowBackOutline from './BrIconArrowBackOutline.vue'
import BrIconArrowBackSharp from './BrIconArrowBackSharp.vue'

export default {
  install(app: App) {
    app.component(BrIconArrowBack.name, BrIconArrowBack)
    app.component(BrIconArrowBackOutline.name, BrIconArrowBackOutline)
    app.component(BrIconArrowBackSharp.name, BrIconArrowBackSharp)
  },
} as Plugin

export { BrIconArrowBack, BrIconArrowBackOutline, BrIconArrowBackSharp }

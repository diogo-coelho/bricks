import { App, Plugin } from 'vue'
import BrIconImageOutline from './BrIconImageOutline.vue'
import BrIconImageSharp from './BrIconImageSharp.vue'
import BrIconImage from './BrIconImage.vue'

export default {
  install(app: App) {
    app.component(BrIconImageOutline.name, BrIconImageOutline)
    app.component(BrIconImageSharp.name, BrIconImageSharp)
    app.component(BrIconImage.name, BrIconImage)
  },
} as Plugin

export { BrIconImageOutline, BrIconImageSharp, BrIconImage }

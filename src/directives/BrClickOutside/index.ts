import { App, Plugin } from 'vue'
import BrClickOutside from './BrClickOutsideDirective'

export default {
  install(app: App) {
    app.directive('click-outside', BrClickOutside)
  },
} as Plugin

export { BrClickOutside }

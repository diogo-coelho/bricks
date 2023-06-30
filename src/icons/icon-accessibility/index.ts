import { App, Plugin } from 'vue'
import BrIconAccessibility from './BrIconAccessibility.vue'
import BrIconAccessibilityOutline from './BrIconAccessibilityOutline.vue'
import BrIconAccessibilitySharp from './BrIconAccessibilitySharp.vue'

export default {
  install(app: App) {
    app.component(BrIconAccessibility.name, BrIconAccessibility)
    app.component(BrIconAccessibilityOutline.name, BrIconAccessibilityOutline)
    app.component(BrIconAccessibilitySharp.name, BrIconAccessibilitySharp)
  },
} as Plugin

export {
  BrIconAccessibility,
  BrIconAccessibilityOutline,
  BrIconAccessibilitySharp,
}

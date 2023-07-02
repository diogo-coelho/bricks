import { App, Plugin } from 'vue'
import BrIconColorPaletteOutline from './BrIconColorPaletteOutline.vue'
import BrIconColorPaletteSharp from './BrIconColorPaletteSharp.vue'
import BrIconColorPalette from './BrIconColorPalette.vue'

export default {
  install(app: App) {
    app.component(BrIconColorPaletteOutline.name, BrIconColorPaletteOutline)
    app.component(BrIconColorPaletteSharp.name, BrIconColorPaletteSharp)
    app.component(BrIconColorPalette.name, BrIconColorPalette)
  },
} as Plugin

export {
  BrIconColorPaletteOutline,
  BrIconColorPaletteSharp,
  BrIconColorPalette,
}

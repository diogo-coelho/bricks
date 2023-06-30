import { App, Plugin } from 'vue'
import BrIconAlbums from './BrIconAlbums.vue'
import BrIconAlbumsOutline from './BrIconAlbumsOutline.vue'
import BrIconAlbumsSharp from './BrIconAlbumsSharp.vue'

export default {
  install(app: App) {
    app.component(BrIconAlbums.name, BrIconAlbums)
    app.component(BrIconAlbumsOutline.name, BrIconAlbumsOutline)
    app.component(BrIconAlbumsSharp.name, BrIconAlbumsSharp)
  },
} as Plugin

export { BrIconAlbums, BrIconAlbumsOutline, BrIconAlbumsSharp }

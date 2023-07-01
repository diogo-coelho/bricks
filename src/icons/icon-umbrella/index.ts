import { App, Plugin } from 'vue'
import BrIconUmbrellaOutline from './BrIconUmbrellaOutline.vue'
import BrIconUmbrellaSharp from './BrIconUmbrellaSharp.vue'
import BrIconUmbrella from './BrIconUmbrella.vue'

export default {
  install(app: App) {
    app.component(BrIconUmbrellaOutline.name, BrIconUmbrellaOutline)
    app.component(BrIconUmbrellaSharp.name, BrIconUmbrellaSharp)
    app.component(BrIconUmbrella.name, BrIconUmbrella)
  },
} as Plugin

export { BrIconUmbrellaOutline, BrIconUmbrellaSharp, BrIconUmbrella }

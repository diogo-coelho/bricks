import { App, Plugin } from 'vue'
import BrIconLogoDesignernews from './BrIconLogoDesignernews.vue'

export default {
  install(app: App) {
    app.component(BrIconLogoDesignernews.name, BrIconLogoDesignernews)
  },
} as Plugin

export { BrIconLogoDesignernews }

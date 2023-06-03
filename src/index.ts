import { App, Plugin } from 'vue'
import * as components from './components'
import * as directives from './directives'
import * as utils from './utils'

// Create module definition for Vue.use()
const BricksLibrary: Plugin = {
  install(app: App) {
    // Auto import all components
    for (const componentKey in components) {
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      app.use((components as any)[componentKey])
    }

    for (const directiveKey in directives) {
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      app.use((directives as any)[directiveKey])
    }

	app.config.globalProperties.$utils = utils
  },
}

export default BricksLibrary

// export all components as vue plugin
export * from './components'

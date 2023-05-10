import { App, Plugin } from 'vue'
import * as components from './components'

// Create module definition for Vue.use()
const BricksLibrary: Plugin = {
  install(app: App) {
    // Auto import all components
    for (const componentKey in components) {
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      app.use((components as any)[componentKey])
    }
  },
}

export default BricksLibrary

// export all components as vue plugin
export * from './components'

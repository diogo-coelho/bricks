import { App, Plugin } from 'vue'
import * as components from './components'

// Declare install function executed by Vue.use()
export function install (app: App) : void {
	for (const name in components) {
		console.log('name: ', name)
		console.log('component: ', (components as any)[name])
		app.component(name, (components as any)[name])
	}
}

// Create module definition for Vue.use()
const BricksUILibrary: Plugin = {
	install
}

export default BricksUILibrary
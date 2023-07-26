import { App, Plugin } from 'vue'
import BrTable from './BrTable.vue'
import BrTHead from './BrTHead.vue'
import BrTBody from './BrTBody.vue'

export default {
  install(app: App) {
    app.component(BrTable.name, BrTable)
	app.component(BrTHead.name, BrTHead)
	app.component(BrTBody.name, BrTBody)
  },
} as Plugin

export { BrTable, BrTHead, BrTBody }
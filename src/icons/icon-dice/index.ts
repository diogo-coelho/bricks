import { App, Plugin } from 'vue'
import BrIconDiceOutline from './BrIconDiceOutline.vue'
import BrIconDiceSharp from './BrIconDiceSharp.vue'
import BrIconDice from './BrIconDice.vue'

export default {
  install(app: App) {
    app.component(BrIconDiceOutline.name, BrIconDiceOutline)
    app.component(BrIconDiceSharp.name, BrIconDiceSharp)
    app.component(BrIconDice.name, BrIconDice)
  },
} as Plugin

export { BrIconDiceOutline, BrIconDiceSharp, BrIconDice }

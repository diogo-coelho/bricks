import { App, Plugin } from 'vue'
import BrIconAmericanFootball from './BrIconAmericanFootball.vue'
import BrIconAmericanFootballOutline from './BrIconAmericanFootballOutline.vue'
import BrIconAmericanFootballSharp from './BrIconAmericanFootballSharp.vue'

export default {
  install(app: App) {
    app.component(BrIconAmericanFootball.name, BrIconAmericanFootball)
    app.component(
      BrIconAmericanFootballOutline.name,
      BrIconAmericanFootballOutline
    )
    app.component(BrIconAmericanFootballSharp.name, BrIconAmericanFootballSharp)
  },
} as Plugin

export {
  BrIconAmericanFootball,
  BrIconAmericanFootballOutline,
  BrIconAmericanFootballSharp,
}

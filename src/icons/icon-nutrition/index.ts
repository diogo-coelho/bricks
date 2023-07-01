import { App, Plugin } from 'vue'
import BrIconNutritionOutline from './BrIconNutritionOutline.vue'
import BrIconNutritionSharp from './BrIconNutritionSharp.vue'
import BrIconNutrition from './BrIconNutrition.vue'

export default {
  install(app: App) {
    app.component(BrIconNutritionOutline.name, BrIconNutritionOutline)
    app.component(BrIconNutritionSharp.name, BrIconNutritionSharp)
    app.component(BrIconNutrition.name, BrIconNutrition)
  },
} as Plugin

export { BrIconNutritionOutline, BrIconNutritionSharp, BrIconNutrition }

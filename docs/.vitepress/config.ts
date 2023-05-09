import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bricks",
  description: "A UI components library for Vue.js",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Componentes', link: '/components/br-button' }
    ],

    sidebar: [
      {
        text: 'Components',
        items: [
          { text: 'BrButton', link: '/components/br-button' },
          { text: 'BrInput', link: '/components/br-input' }
        ]
      }
    ],
  },
  
})

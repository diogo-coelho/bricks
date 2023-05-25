import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'pt-BR',
  title: "Bricks",
  description: "A UI components library for Vue.js",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Get Started', link: '/get-started.md' }
    ],

    sidebar: [
      {
        text: 'Components',
        items: [
		  { text: 'Botão', link: '/components/br-button' },
		  { text: 'Select', link: '/components/br-select' }
        ]
      },
	  {
		text: 'Design Tokens',
		items: [
		  { text: 'Cores', link: '/design-tokens/colors.md' },
		]
	  }
    ],
  },
  
})

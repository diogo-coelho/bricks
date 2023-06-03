import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'pt-BR',
  title: "Bricks",
  description: "A UI components library for Vue.js",
  base: '/bricks/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Get Started', link: '/get-started.md' }
    ],

    sidebar: [
      {
        text: 'Components',
        items: [
		  { text: 'Avatar', link: '/components/br-avatar' },
		  { text: 'Breadcrumb', link: '/components/br-breadcrumb'},
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

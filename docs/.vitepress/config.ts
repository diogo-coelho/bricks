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
		  { text: 'Alert', link: '/components/br-alert' },
		  { text: 'Avatar', link: '/components/br-avatar' },
		  { text: 'Badge', link: '/components/br-badge'},
		  { text: 'Breadcrumb', link: '/components/br-breadcrumb'},
		  { text: 'Botão', link: '/components/br-button' },
		  { text: 'Botão de Ícone', link: '/components/br-icon-button'},
		  { text: 'Checkbox', link: '/components/br-checkbox'},
		  { text: 'Ícone', link: '/components/br-icon'},
		  { text: 'Input', link: '/components/br-input'},
		  { text: 'Modal', link: '/components/br-modal'},
		  { text: 'Radio', link: '/components/br-radio'},
		  { text: 'Select', link: '/components/br-select' },
		  { text: 'Switch', link: '/components/br-switch'},
		  { text: 'Table', link: '/components/br-table' },
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

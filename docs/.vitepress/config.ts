import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'pt-BR',
  title: "Bricks",
  description: "A UI components library for Vue.js",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'Components',
        items: [
          { text: 'Botão', link: '/components/br-button' },
          { text: 'Input', link: '/components/br-input' }
        ]
      },
	  {
		text: 'Design Tokens',
		items: [
		  { text: 'Border radius', link: '/design-tokens/border-radius.md' },
		  { text: 'Cores', link: '/design-tokens/colors.md' },
		  { text: 'Espaçamento', link: '/design-tokens/spacing.md' },
		  { text: 'Tipografia', link: '/design-tokens/typography.md'}
		]
	  }
    ],
  },
  
})

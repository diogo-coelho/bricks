<script setup>
import BrButton from '../../src/components/button/BrButton.vue'
</script>

# BrButton <Badge type="warning" text="beta" />


`Button` é um componente que representa um elemento clicável que retornará uma ação para o usuário.
<BrButton>Button</BrButton>

```vue
<BrButton> Button </BrButton>
```

## Exemplos

### Variants

Passe o atributo `variant` para configurar a variante do botão.

<div class="inline-flex w-full">
	<BrButton class="mr-x-small">Default</BrButton>
	<BrButton class="mr-x-small" variant="primary">Primary</BrButton>
	<BrButton class="mr-x-small" variant="neutral">Neutral</BrButton>
	<BrButton class="mr-x-small" variant="success">Success</BrButton>
	<BrButton class="mr-x-small" variant="warning">Warning</BrButton>
	<BrButton variant="danger">Danger</BrButton>
</div>

```vue 
<BrButton>Default</BrButton>
<BrButton variant="primary">Primary</BrButton>
<BrButton variant="neutral">Neutral</BrButton>
<BrButton variant="success">Success</BrButton>
<BrButton variant="warning">Warning</BrButton>
<BrButton variant="danger">Danger</BrButton>
```

### Outline Buttons

Passe o atributo `outline` para botões com fundo transparente.

<div class="inline-flex w-full">
	<BrButton class="mr-x-small" outline>Default</BrButton>
	<BrButton class="mr-x-small" variant="primary" outline>Primary</BrButton>
	<BrButton class="mr-x-small" variant="neutral" outline>Neutral</BrButton>
	<BrButton class="mr-x-small" variant="success" outline>Success</BrButton>
	<BrButton class="mr-x-small" variant="warning" outline>Warning</BrButton>
	<BrButton variant="danger" outline>Danger</BrButton>
</div>

```vue 
<BrButton outline>Default</BrButton>
<BrButton variant="primary" outline>Primary</BrButton>
<BrButton variant="neutral" outline>Neutral</BrButton>
<BrButton variant="success" outline>Success</BrButton>
<BrButton variant="warning" outline>Warning</BrButton>
<BrButton variant="danger" outline>Danger</BrButton>
```

### Disabled

Para desabilitar o componente `BrButton`, passe o atributo `disabled` como uma prop.

<div class="inline-flex w-full">
	<BrButton class="mr-x-small" disabled>Default</BrButton>
	<BrButton class="mr-x-small" variant="primary" disabled>Primary</BrButton>
	<BrButton class="mr-x-small" variant="neutral" disabled>Neutral</BrButton>
	<BrButton class="mr-x-small" variant="success" disabled>Success</BrButton>
	<BrButton class="mr-x-small" variant="warning" disabled>Warning</BrButton>
	<BrButton disabled variant="danger">Danger</BrButton>
</div>

```vue 
<BrButton disabled>Default</BrButton>
<BrButton variant="primary" disabled>Primary</BrButton>
<BrButton variant="neutral" disabled>Neutral</BrButton>
<BrButton variant="success" disabled>Success</BrButton>
<BrButton variant="warning" disabled>Warning</BrButton>
<BrButton variant="danger" disabled>Danger</BrButton>
```

### Size

É possível alterar o tamanho do botão através da variável `size`.

<div class="inline-flex align-center w-full">
	<BrButton class="mr-x-small" size="small">Small</BrButton>
	<BrButton class="mr-x-small" size="medium">Medium</BrButton>
	<BrButton class="mr-x-small" size="large">Large</BrButton>	
</div>

```vue
<BrButton size="small">Small</BrButton>
<BrButton size="medium">Medium</BrButton>
<BrButton size="large">Large</BrButton>	
```

### Pill Button

Para criar botões com as bordas arredondadas, basta informar o atributo `pill`.

<BrButton pill>Pill Button</BrButton>

```vue
<BrButton pill>Pill Button</BrButton>
```

### Text Buttons

Para criar botões sem bordas ou cores de background, passe o atributo `text`.

<div class="inline-flex align-center w-full">
	<BrButton class="mr-x-small" size="small" text>Text Button</BrButton>
	<BrButton class="mr-x-small" size="medium" text>Text Button</BrButton>
	<BrButton class="mr-x-small" size="large" text>Text Button</BrButton>	
</div>

```vue
<BrButton size="small" text>Text Button</BrButton>
<BrButton size="medium" text>Text Button</BrButton>
<BrButton size="large" text>Text Button</BrButton>	
```

### Link Buttons

Caso queira usar um botão que funcione como um link, é necessário passar o atributo `link`, que possui as seguintes propriedades: `href`: `(obrigatório)` especifica a URL da página para onde o link vai; `target`: especifica onde abrir o documento vinculado; `download`: indica o nome do arquivo para download.

<div class="inline-flex w-full">
	<BrButton class="mr-x-small" :link="{'href':'https://www.google.com'}">Link</BrButton>
	<BrButton class="mr-x-small" :link="{'href':'https://www.google.com','target':'_blank'}">New Window</BrButton>
	<BrButton class="mr-x-small" :link="{'href':'./images/html-5-logo.png','download':'html-5-logo.png'}">Download</BrButton>
	<BrButton class="mr-x-small" :link="{'href':'https://www.google.com'}" disabled>Disabled</BrButton>
</div>

```vue
<BrButton :link="{'href':'https://www.google.com'}">Link</BrButton>
<BrButton :link="{'href':'https://www.google.com','target':'_blank'}">New Window</BrButton>
<BrButton :link="{'href':'./images/html-5-logo.png','download':'html-5-logo.png'}">Download</BrButton>
<BrButton :link="{'href':'https://www.google.com'}" disabled>Disabled</BrButton>
```

### Prefix and Suffix Buttons

É possível criar botões com ícones passando os atributos `prefix` e `suffix`, com a string do ícone que deverá ser renderizado dentro do botão. Você encontrará a lista completa de ícones através deste link.

<div class="inline-flex align-center w-full mb-medium">
	<BrButton class="mr-x-small" size="small" prefix="settings-icon">
		Settings
	</BrButton>
	<BrButton class="mr-x-small" size="small" suffix="menu-icon">
		Menu
	</BrButton>
	<BrButton class="mr-x-small" size="small" prefix="settings-icon" suffix="menu-icon">
		Options
	</BrButton>
</div>
<div class="inline-flex align-center w-full mb-medium">
	<BrButton class="mr-x-small" size="medium" prefix="settings-icon">
		Settings
	</BrButton>
	<BrButton class="mr-x-small" size="medium" suffix="menu-icon">
		Menu
	</BrButton>
	<BrButton class="mr-x-small" size="medium" prefix="settings-icon" suffix="menu-icon">
		Options
	</BrButton>
</div>
<div class="inline-flex align-center w-full">
	<BrButton class="mr-x-small" size="large" prefix="settings-icon">
		Settings
	</BrButton>
	<BrButton class="mr-x-small" size="large" suffix="menu-icon">
		Menu
	</BrButton>
	<BrButton class="mr-x-small" size="large" prefix="settings-icon" suffix="menu-icon">
		Options
	</BrButton>
</div>

```vue
// small
<BrButton size="small" prefix="icon-settings">Settings</BrButton>
<BrButton size="small" suffix="icon-menu">Menu</BrButton>
<BrButton size="small" prefix="icon-settings" suffix="icon-menu">Options</BrButton>]
// medium
<BrButton size="medium" prefix="icon-settings">Settings</BrButton>
<BrButton size="medium" suffix="icon-menu">Menu</BrButton>
<BrButton size="medium" prefix="icon-settings" suffix="icon-menu">Options</BrButton>
// large
<BrButton size="large" prefix="icon-settings">Settings</BrButton>
<BrButton size="large" suffix="icon-menu">Menu</BrButton>
<BrButton size="large" prefix="icon-settings" suffix="icon-menu">Options</BrButton>
```
## Eventos

| Name          | Description                                                                            |
| ------------- | :------------------------------------------------------------------------------------: |
| on-click      | Evento emitido ao clicar no botão                                                      |
| on-focus      | Evento emitido ao focar no botão                                                       |
| on-blur       | Evento emitido ao remover o foco do botão                                              |



<style lang="sass">
@import '../../src/styles/index.scss'
</style>
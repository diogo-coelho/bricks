<script setup>
import BrButton from '../../src/components/button/BrButton.vue'
</script>

# BrButton


`Button` é um componente que representa um elemento clicável que retornará uma ação para o usuário.
<BrButton>Button</BrButton>

```vue
<BrButton> Button </BrButton>
```

## Exemplos

### Variantes

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

<style lang="sass">
@import '../../src/styles/index.scss'
</style>
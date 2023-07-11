<script setup>
import BrBadge from '../../src/components/badge/BrBadge.vue'
</script>

# BrBadge <Badge type="warning" text="alpha" />

`BrBadge` é um elemento para exibir contadores e legendas.
<BrBadge>Badge</BrBadge>

```vue
<BrBadge>Badge</BrBadge>
```

## Exemplos

### Variantes

Passe o atributo `variant` para configurar a variante do badge.

<div class="inline-flex w-full">
	<BrBadge class="mr-x-small" variant="primary">Primary</BrBadge>
	<BrBadge class="mr-x-small" variant="neutral">Neutral</BrBadge>
	<BrBadge class="mr-x-small" variant="success">Success</BrBadge>
	<BrBadge class="mr-x-small" variant="warning">Warning</BrBadge>
	<BrBadge variant="danger">Danger</BrBadge>
</div>

```vue 
<BrBadge variant="primary">Primary</BrBadge>
<BrBadge variant="neutral">Neutral</BrBadge>
<BrBadge variant="success">Success</BrBadge>
<BrBadge variant="warning">Warning</BrBadge>
<BrBadge variant="danger">Danger</BrBadge>
```

### Badge arredondado

Para criar botões com as bordas arredondadas, basta informar o atributo `pill`.

<div class="inline-flex w-full">
	<BrBadge class="mr-x-small" variant="primary" pill>Primary</BrBadge>
	<BrBadge class="mr-x-small" variant="neutral" pill>Neutral</BrBadge>
	<BrBadge class="mr-x-small" variant="success" pill>Success</BrBadge>
	<BrBadge class="mr-x-small" variant="warning" pill>Warning</BrBadge>
	<BrBadge variant="danger" pill>Danger</BrBadge>
</div>

```vue
<BrBadge variant="primary" pill>Primary</BrBadge>
<BrBadge variant="neutral" pill>Neutral</BrBadge>
<BrBadge variant="success" pill>Success</BrBadge>
<BrBadge variant="warning" pill>Warning</BrBadge>
<BrBadge variant="danger" pill>Danger</BrBadge>
```

### Badge pulsante

Para criar um badge pulsante, informe o atributo `pulse`.

<div class="inline-flex w-full">
	<BrBadge class="mr-medium" variant="primary" pill pulse>1</BrBadge>
	<BrBadge class="mr-medium" variant="neutral" pill pulse>1</BrBadge>
	<BrBadge class="mr-medium" variant="success" pill pulse>1</BrBadge>
	<BrBadge class="mr-medium" variant="warning" pill pulse>1</BrBadge>
	<BrBadge variant="danger" pill pulse>1</BrBadge>
 </div>

```vue
<BrBadge variant="primary" pill pulse>1</BrBadge>
<BrBadge variant="neutral" pill pulse>1</BrBadge>
<BrBadge variant="success" pill pulse>1</BrBadge>
<BrBadge variant="warning" pill pulse>1</BrBadge>
<BrBadge variant="danger" pill pulse>1</BrBadge>
```

<style lang="scss">
@import '../../src/styles/index.scss'
</style>
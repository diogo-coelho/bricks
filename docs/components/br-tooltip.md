<script setup>
import BrTooltip from '../../src/components/tooltip/BrTooltip.vue'
import BrButton from '../../src/components/button/BrButton.vue'
</script>

# BrTooltip <Badge type="warning" text="alpha" />

`BrTooltip` apresenta informação adicional com base numa ação do usuário.

<BrTooltip content="Isso aqui é um tooltip" placement="right">
	<BrButton>Passe o mouse sobre o botão</BrButton>
</BrTooltip>

```jsx
<BrTooltip content="Isso aqui é um tooltip">
	<BrButton>Passe o mouse sobre o botão</BrButton>
</BrTooltip>
```

## Exemplos

### Posicionamento

Utilize o atributo `placement` para pocionar o tooltip em relação ao elemento ao qual se refere.

<div class="flex mb-medium">
<div class="flex inline-flex mr-small">
	<BrTooltip content="top-start" placement="top-start">
		<BrButton>Mostre acima</BrButton>
	</BrTooltip>
</div>

<div class="flex inline-flex mr-small">
	<BrTooltip content="top" placement="top">
		<BrButton>Mostre acima</BrButton>
	</BrTooltip>
</div>

<div class="flex inline-flex mr-small">
	<BrTooltip content="top-end" placement="top-end">
		<BrButton>Mostre acima</BrButton>
	</BrTooltip>
</div>
</div>

<div class="flex mb-medium">
<div class="flex inline-flex mr-small">
	<BrTooltip content="bottom-start" placement="bottom-start">
		<BrButton>Mostre abaixo</BrButton>
	</BrTooltip>
</div>

<div class="flex inline-flex mr-small">
	<BrTooltip content="bottom" placement="bottom">
		<BrButton>Mostre abaixo</BrButton>
	</BrTooltip>
</div>

<div class="flex inline-flex mr-small">
	<BrTooltip content="bottom-end" placement="bottom-end">
		<BrButton>Mostre abaixo</BrButton>
	</BrTooltip>
</div>
</div>

<div class="flex mb-medium">
<div class="flex inline-flex mr-small">
	<BrTooltip content="left-start" placement="left-start">
		<BrButton>Mostre à esquerda</BrButton>
	</BrTooltip>
</div>

<div class="flex inline-flex mr-small">
	<BrTooltip content="left" placement="left">
		<BrButton>Mostre à esquerda</BrButton>
	</BrTooltip>
</div>

<div class="flex inline-flex mr-small">
	<BrTooltip content="left-end" placement="left-end">
		<BrButton>Mostre à esquerda</BrButton>
	</BrTooltip>
</div>
</div>

<div class="flex mb-medium">
<div class="flex inline-flex mr-small">
	<BrTooltip content="right-start" placement="right-start">
		<BrButton>Mostre à direita</BrButton>
	</BrTooltip>
</div>

<div class="flex inline-flex mr-small">
	<BrTooltip content="right" placement="right">
		<BrButton>Mostre à direita</BrButton>
	</BrTooltip>
</div>

<div class="flex inline-flex mr-small">
	<BrTooltip content="right-end" placement="right-end">
		<BrButton>Mostre à direita</BrButton>
	</BrTooltip>
</div>
</div>

<style lang="scss">
@import '../../src/styles/index.scss'
</style>
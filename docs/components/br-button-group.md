<script setup>
import BrButton from '../../src/components/button/BrButton.vue'
import BrButtonGroup from '../../src/components/button/BrButtonGroup.vue'
</script>

# BrButtonGroup <Badge type="warning" text="alpha" />

`BrButtonGroup` pode ser utilizado para agrupar butões relacionados dentro de seções.

<BrButtonGroup>
	<BrButton>Esquerda</BrButton>
	<BrButton>Centro</BrButton>
	<BrButton>Direita</BrButton>
</BrButtonGroup>

```jsx
<BrButtonGroup>
	<BrButton>Esquerda</BrButton>
	<BrButton>Centro</BrButton>
	<BrButton>Direita</BrButton>
</BrButtonGroup>
```
## Exemplos

### Tamanhos dos botões

Todos os tamanhos de botões são suportados. Evite agrupar diferentes tamanhos sob o mesmo grupo.

<div class="mb-medium">
	<BrButtonGroup>
		<BrButton size="small">Esquerda</BrButton>
		<BrButton size="small">Centro</BrButton>
		<BrButton size="small">Direita</BrButton>
	</BrButtonGroup>
</div>

<div class="mb-medium">
	<BrButtonGroup>
		<BrButton size="medium">Esquerda</BrButton>
		<BrButton size="medium">Centro</BrButton>
		<BrButton size="medium">Direita</BrButton>
	</BrButtonGroup>
</div>

<div class="mb-medium">
	<BrButtonGroup>
		<BrButton size="large">Esquerda</BrButton>
		<BrButton size="large">Centro</BrButton>
		<BrButton size="large">Direita</BrButton>
	</BrButtonGroup>
</div>

```jsx
<BrButtonGroup>
	<BrButton size="small">Esquerda</BrButton>
	<BrButton size="small">Centro</BrButton>
	<BrButton size="small">Direita</BrButton>
</BrButtonGroup>

<BrButtonGroup>
	<BrButton size="medium">Esquerda</BrButton>
	<BrButton size="medium">Centro</BrButton>
	<BrButton size="medium">Direita</BrButton>
</BrButtonGroup>

<BrButtonGroup>
	<BrButton size="large">Esquerda</BrButton>
	<BrButton size="large">Centro</BrButton>
	<BrButton size="large">Direita</BrButton>
</BrButtonGroup>
```

### Botões temáticos

Passe o atributo `variant` nos botões para criar um grupo temático.

<div class="mb-medium">
	<BrButtonGroup>
		<BrButton variant="primary">Esquerda</BrButton>
		<BrButton variant="primary">Centro</BrButton>
		<BrButton variant="primary">Direita</BrButton>
	</BrButtonGroup>
</div>

<div class="mb-medium">
	<BrButtonGroup>
		<BrButton variant="neutral">Esquerda</BrButton>
		<BrButton variant="neutral">Centro</BrButton>
		<BrButton variant="neutral">Direita</BrButton>
	</BrButtonGroup>
</div>

<div class="mb-medium">
	<BrButtonGroup>
		<BrButton variant="success">Esquerda</BrButton>
		<BrButton variant="success">Centro</BrButton>
		<BrButton variant="success">Direita</BrButton>
	</BrButtonGroup>
</div>

<div class="mb-medium">
	<BrButtonGroup>
		<BrButton variant="warning">Esquerda</BrButton>
		<BrButton variant="warning">Centro</BrButton>
		<BrButton variant="warning">Direita</BrButton>
	</BrButtonGroup>
</div>

<div class="mb-medium">
	<BrButtonGroup>
		<BrButton variant="danger">Esquerda</BrButton>
		<BrButton variant="danger">Centro</BrButton>
		<BrButton variant="danger">Direita</BrButton>
	</BrButtonGroup>
</div>

```jsx
<BrButtonGroup>
	<BrButton variant="primary">Esquerda</BrButton>
	<BrButton variant="primary">Centro</BrButton>
	<BrButton variant="primary">Direita</BrButton>
</BrButtonGroup>

<BrButtonGroup>
	<BrButton variant="neutral">Esquerda</BrButton>
	<BrButton variant="neutral">Centro</BrButton>
	<BrButton variant="neutral">Direita</BrButton>
</BrButtonGroup>

<BrButtonGroup>
	<BrButton variant="success">Esquerda</BrButton>
	<BrButton variant="success">Centro</BrButton>
	<BrButton variant="sucess">Direita</BrButton>
</BrButtonGroup>

<BrButtonGroup>
	<BrButton variant="warning">Esquerda</BrButton>
	<BrButton variant="warning">Centro</BrButton>
	<BrButton variant="warning">Direita</BrButton>
</BrButtonGroup>

<BrButtonGroup>
	<BrButton variant="danger">Esquerda</BrButton>
	<BrButton variant="danger">Centro</BrButton>
	<BrButton variant="danger">Direita</BrButton>
</BrButtonGroup>
```

### Grupo de botões arredondado

Você pode criar um grupo de botões arredondado passando `pill` como prop dos botões.

<div class="mb-medium">
	<BrButtonGroup>
		<BrButton size="small" pill>Esquerda</BrButton>
		<BrButton size="small" pill>Centro</BrButton>
		<BrButton size="small" pill>Direita</BrButton>
	</BrButtonGroup>
</div>

<div class="mb-medium">
	<BrButtonGroup>
		<BrButton size="medium" pill>Esquerda</BrButton>
		<BrButton size="medium" pill>Centro</BrButton>
		<BrButton size="medium" pill>Direita</BrButton>
	</BrButtonGroup>
</div>

<div class="mb-medium">
	<BrButtonGroup>
		<BrButton size="large" pill>Esquerda</BrButton>
		<BrButton size="large" pill>Centro</BrButton>
		<BrButton size="large" pill>Direita</BrButton>
	</BrButtonGroup>
</div>

```jsx
<BrButtonGroup>
	<BrButton size="small" pill>Esquerda</BrButton>
	<BrButton size="small" pill>Centro</BrButton>
	<BrButton size="small" pill>Direita</BrButton>
</BrButtonGroup>

<BrButtonGroup>
	<BrButton size="medium" pill>Esquerda</BrButton>
	<BrButton size="medium" pill>Centro</BrButton>
	<BrButton size="medium" pill>Direita</BrButton>
</BrButtonGroup>

<BrButtonGroup>
	<BrButton size="large" pill>Esquerda</BrButton>
	<BrButton size="large" pill>Centro</BrButton>
	<BrButton size="large" pill>Direita</BrButton>
</BrButtonGroup>
```

<style lang="scss">
@import '../../src/styles/index.scss'	
</style>
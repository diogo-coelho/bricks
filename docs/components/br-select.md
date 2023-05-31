<script setup>
import BrSelect from '../../src/components/select/BrSelect.vue'
</script>

# BrSelect <Badge type="warning" text="beta" />

`BrSelect` é um componente que permite a seleção de um item para dentro de uma lista pré-determinada.

<BrSelect 
	:items="[
		{ value: '1', label: 'Item 1'}, 
		{ value: '2', label: 'Item 2'}, 
		{ value: '3', label: 'Item 3'},
		{ value: '4', label: 'Item 4'}, 
		{ value: '5', label: 'Item 5'}, 
		{ value: '6', label: 'Item 6'},
		{ value: '7', label: 'Item 7'}, 
		{ value: '8', label: 'Item 8'}, 
		{ value: '9', label: 'Item 9'},
	]"
></BrSelect>

```vue
<BrSelect :items="[
	{ value: '1', label: 'Item 1'}, 
	{ value: '2', label: 'Item 2'}, 
	{ value: '3', label: 'Item 3'},
	{ value: '4', label: 'Item 4'}, 
	{ value: '5', label: 'Item 5'}, 
	{ value: '6', label: 'Item 6'},
	{ value: '7', label: 'Item 7'}, 
	{ value: '8', label: 'Item 8'}, 
	{ value: '9', label: 'Item 9'},
]"></BrSelect>
```

## Exemplos

### Label

Passe o atributo `label` para adicionar uma label no select.

<BrSelect
	label="Modelo de carro"
	:items="[
		{ value: '1', label: 'Audi'},
		{ value: '2', label: 'Volkswagen'},
		{ value: '3', label: 'Merdedes-Benz'},
	]"
></BrSelect>

```vue
<BrSelect 
	label="Modelo de carro"
	:items="[
		{ value: '1', label: 'Audi'},
		{ value: '2', label: 'Volkswagen'},
		{ value: '3', label: 'Merdedes-Benz'},
	]"
></BrSelect>
```

### Desabilitado

Passe o atributo `disabled` para desabilitar o elemento.

<BrSelect
	disabled
	:items="[
		{ value: '1', label: 'Item 1'},
		{ value: '2', label: 'Item 2'},
		{ value: '3', label: 'Item 3'},
	]"
></BrSelect>

```vue
<BrSelect 
	disabled
	:items="[
		{ value: '1', label: 'Item 1'},
		{ value: '2', label: 'Item 2'},
		{ value: '3', label: 'Item 3'},
	]"
></BrSelect>
```

### Select arredondado

Passe o atributo `pill` para deixar as bordas do select arredondadas.

<div class="inline-block w-full">
	<BrSelect
		class="mb-medium"
		pill
		:items="[
			{ value: '1', label: 'Item 1'},
			{ value: '2', label: 'Item 2'},
			{ value: '3', label: 'Item 3'},
		]"
	></BrSelect>
	<BrSelect
		pill
		class="mb-medium"
		label="Cidade"
		:items="[
			{ value: '1', label: 'São Paulo'},
			{ value: '2', label: 'Rio de Janeiro'},
			{ value: '3', label: 'Belo Horizonte'},
		]"
	></BrSelect>
</div>

```vue
<BrSelect 
	pill
	:items="[
		{ value: '1', label: 'Item 1'},
		{ value: '2', label: 'Item 2'},
		{ value: '3', label: 'Item 3'},
	]"
></BrSelect>

<BrSelect
	pill
	label="Cidade"
	:items="[
		{ value: '1', label: 'São Paulo'},
		{ value: '2', label: 'Rio de Janeiro'},
		{ value: '3', label: 'Belo Horizonte'},
	]"
></BrSelect>
```

### Tamanhos

Passe através do atributo `size` o tamanho que o select deve ter.

<div class="inline-block w-full">
	<BrSelect
		class="mb-medium"
		size="small"
		:items="[
			{ value: '1', label: 'Item 1'},
			{ value: '2', label: 'Item 2'},
			{ value: '3', label: 'Item 3'},
		]"
	></BrSelect>
	<BrSelect
		size="medium"
		class="mb-medium"
		:items="[
			{ value: '1', label: 'Item 1'},
			{ value: '2', label: 'Item 2'},
			{ value: '3', label: 'Item 3'},
		]"
	></BrSelect>
	<BrSelect
		size="large"
		class="mb-2x-large"
		:items="[
			{ value: '1', label: 'Item 1'},
			{ value: '2', label: 'Item 2'},
			{ value: '3', label: 'Item 3'},
		]"
	></BrSelect>
</div>

<div class="inline-block w-full">
	<BrSelect
		class="mb-medium"
		size="small"
		label="Cidade"
		:items="[
			{ value: '1', label: 'São Paulo'},
			{ value: '2', label: 'Rio de Janeira'},
			{ value: '3', label: 'Belo Horizonte'},
		]"
	></BrSelect>
	<BrSelect
		size="medium"
		class="mb-medium"
		label="Cidade"
		:items="[
			{ value: '1', label: 'São Paulo'},
			{ value: '2', label: 'Rio de Janeiro'},
			{ value: '3', label: 'Belo Horizonte'},
		]"
	></BrSelect>
	<BrSelect
		size="large"
		class="mb-medium"
		label="Cidade"
		:items="[
			{ value: '1', label: 'São Paulo'},
			{ value: '2', label: 'Rio de Janeiro'},
			{ value: '3', label: 'Belo Horizonte'},
		]"
	></BrSelect>
</div>

```vue
<BrSelect
	size="small"
	:items="[
		{ value: '1', label: 'Item 1'},
		{ value: '2', label: 'Item 2'},
		{ value: '3', label: 'Item 3'},
	]"
></BrSelect>
<BrSelect
	size="medium"
	:items="[
		{ value: '1', label: 'Item 1'},
		{ value: '2', label: 'Item 2'},
		{ value: '3', label: 'Item 3'},
	]"
></BrSelect>
<BrSelect
	class="mb-medium"
	:items="[
		{ value: '1', label: 'Item 1'},
		{ value: '2', label: 'Item 2'},
		{ value: '3', label: 'Item 3'},
	]"
></BrSelect>

<BrSelect
	size="small"
	label="Cidade"
	:items="[
		{ value: '1', label: 'São Paulo'},
		{ value: '2', label: 'Rio de Janeira'},
		{ value: '3', label: 'Belo Horizonte'},
	]"
></BrSelect>
<BrSelect
	size="medium"
	label="Cidade"
	:items="[
		{ value: '1', label: 'São Paulo'},
		{ value: '2', label: 'Rio de Janeiro'},
		{ value: '3', label: 'Belo Horizonte'},
	]"
></BrSelect>
<BrSelect
	size="large"
	label="Cidade"
	:items="[
		{ value: '1', label: 'São Paulo'},
		{ value: '2', label: 'Rio de Janeiro'},
		{ value: '3', label: 'Belo Horizonte'},
	]"
></BrSelect>
```

### Item selecionado

É possível passar um item como pré-selecionado através da propriedade `selected`

<BrSelect
	selected="Item 3"
	:items="[
		{ value: '1', label: 'Item 1'},
		{ value: '2', label: 'Item 2'},
		{ value: '3', label: 'Item 3'},
	]"
></BrSelect>

```vue
<BrSelect
	selected="Item 3"
	:items="[
		{ value: '1', label: 'Item 1'},
		{ value: '2', label: 'Item 2'},
		{ value: '3', label: 'Item 3'},
	]"
></BrSelect>
```



<style lang="scss">
@import '../../src/styles/index.scss'
</style>
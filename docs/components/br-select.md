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
	]"
/>

```vue
<BrSelect :items="[
	{ value: '1', label: 'Item 1'}, 
	{ value: '2', label: 'Item 2'}, 
	{ value: '3', label: 'Item 3'},
]"/>
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
/>

```vue
<BrSelect 
	label="Modelo de carro"
	:items="[
		{ value: '1', label: 'Audi'},
		{ value: '2', label: 'Volkswagen'},
		{ value: '3', label: 'Merdedes-Benz'},
	]"/>
```

<style lang="scss">
@import '../../src/styles/index.scss'
</style>
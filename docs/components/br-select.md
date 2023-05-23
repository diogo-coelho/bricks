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
<BrSelect 
	:items="[
		{ value: '1', label: 'Item 1'},
		{ value: '2', label: 'Item 2'},
		{ value: '3', label: 'Item 3'},
	]"
/>
```
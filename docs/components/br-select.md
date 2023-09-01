<script setup>
import BrSelect from '../../src/components/select/BrSelect.vue'
import BrSelectItem from '../../src/components/select/BrSelectItem.vue'
</script>

# BrSelect <Badge type="warning" text="alpha" />

`BrSelect` é um componente que permite a seleção de um item para dentro de uma lista pré-determinada.

<BrSelect name="br-select-group-1">
	<BrSelectItem value="1">Item 1</BrSelectItem>
	<BrSelectItem value="2">Item 2</BrSelectItem>
	<BrSelectItem value="3">Item 3</BrSelectItem>
	<BrSelectItem value="4">Item 4</BrSelectItem>
	<BrSelectItem value="5">Item 5</BrSelectItem>
</BrSelect>

```jsx
<BrSelect name="br-select-group-1">
	<BrSelectItem value="1">Item 1</BrSelectItem>
	<BrSelectItem value="2">Item 2</BrSelectItem>
	<BrSelectItem value="3">Item 3</BrSelectItem>
	<BrSelectItem value="4">Item 4</BrSelectItem>
	<BrSelectItem value="5">Item 5</BrSelectItem>
</BrSelect>
```

## Eventos

| Nome          | Descrição                                                                              |
| ------------- | :------------------------------------------------------------------------------------: |
| on-change     | Evento emitido ao trocar a opção do select                                             |

 */
<style lang="scss">
@import '../../src/styles/index.scss'
</style>
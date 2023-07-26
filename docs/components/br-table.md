<script setup>
import BrTable from '../../src/components/table/BrTable.vue'
import BrTHead from '../../src/components/table/BrTHead.vue'
import BrTBody from '../../src/components/table/BrTBody.vue'
</script>

# BrTable <Badge type="warning" text="alpha" />

`BrTable` disponibiliza a exibição de dados organizados em linhas e colunas.
<BrTable>
	<BrTHead>
		<tr>
			<td>#</td>
			<td>Coluna 1</td>
			<td>Coluna 2</td>
			<td>Coluna 3</td>
		</tr>
	</BrTHead>
	<BrTBody>
		<tr>
			<td>Linha 1</td>
			<td>1</td>
			<td>2</td>
			<td>3</td>
		</tr>
		<tr>
			<td>Linha 2</td>
			<td>4</td>
			<td>5</td>
			<td>6</td>
		</tr>
	</BrTBody>
</BrTable>

```jsx
<BrTable>
	<BrTHead>
		<tr>
			<td>#</td>
			<td>Coluna 1</td>
			<td>Coluna 2</td>
			<td>Coluna 3</td>
		</tr>
	</BrTHead>
	<BrTBody>
		<tr>
			<td>Linha 1</td>
			<td>1</td>
			<td>2</td>
			<td>3</td>
		</tr>
		<tr>
			<td>Linha 2</td>
			<td>4</td>
			<td>5</td>
			<td>6</td>
		</tr>
	</BrTBody>
</BrTable>
```

<style lang="scss">
@import '../../src/styles/index.scss'
</style>
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
			<th>#</th>
			<th>Coluna 1</th>
			<th>Coluna 2</th>
			<th>Coluna 3</th>
		</tr>
	</BrTHead>
	<BrTBody>
		<tr>
			<th>Linha 1</th>
			<td>1</td>
			<td>2</td>
			<td>3</td>
		</tr>
		<tr>
			<th>Linha 2</th>
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
			<th>#</th>
			<th>Coluna 1</th>
			<th>Coluna 2</th>
			<th>Coluna 3</th>
		</tr>
	</BrTHead>
	<BrTBody>
		<tr>
			<th>Linha 1</th>
			<td>1</td>
			<td>2</td>
			<td>3</td>
		</tr>
		<tr>
			<th>Linha 2</th>
			<td>4</td>
			<td>5</td>
			<td>6</td>
		</tr>
	</BrTBody>
</BrTable>
```

## Exemplos

### Tabela com 100% de largura

Caso queira que a tabela preencha toda a largura do elemento, passe o atributo `full-width`.

<BrTable full-width>
	<BrTHead>
		<tr>
			<th>Nome</th>
			<th>Cargo</th>
		</tr>
	</BrTHead>
	<BrTBody>
		<tr>
			<td>Adam Smith</td>
			<td>Gerente</td>
		</tr>
		<tr>
			<td>Olivia Thompson</td>
			<td>Diretora</td>
		</tr>
		<tr>
			<td>Gerald Ramis</td>
			<td>Administrador</td>
		</tr>
		<tr>
			<td>Sandra Lee</td>
			<td>Coordenadora de Recursos Humanos</td>
		</tr>
		<tr>
			<td>Arthur Doyle</td>
			<td>Auxiliar de Escritório</td>
		</tr>
		<tr>
			<td>Amanda Nelson</td>
			<td>Designer</td>
		</tr>
	</BrTBody>
</BrTable>

```jsx
<BrTable full-width>
	<BrTHead>
		<tr>
			<th>Nome</th>
			<th>Cargo</th>
		</tr>
	</BrTHead>
	<BrTBody>
		<tr>
			<td>Adam Smith</td>
			<td>Gerente</td>
		</tr>
		<tr>
			<td>Olivia Thompson</td>
			<td>Diretora</td>
		</tr>
		<tr>
			<td>Gerald Ramis</td>
			<td>Administrador</td>
		</tr>
		<tr>
			<td>Sandra Lee</td>
			<td>Coordenadora de Recursos Humanos</td>
		</tr>
		<tr>
			<td>Arthur Doyle</td>
			<td>Auxiliar de Escritório</td>
		</tr>
		<tr>
			<td>Amanda Nelson</td>
			<td>Designer</td>
		</tr>
	</BrTBody>
</BrTable>
```
### Tabela com comportamento responsivo

Para aplicar o comportamento de responsividade na tabela, passe o atributo `responsive`.

<BrTable full-width responsive>
	<BrTHead>
		<tr>
			<th>#</th>
			<th>Coluna 1</th>
			<th>Coluna 2</th>
			<th>Coluna 3</th>
			<th>Coluna 4</th>
			<th>Coluna 5</th>
			<th>Coluna 6</th>
			<th>Coluna 7</th>
		</tr>
	</BrTHead>
	<BrTBody>
		<tr>
			<th>Linha 1</th>
			<td>1</td>
			<td>2</td>
			<td>3</td>
			<td>4</td>
			<td>5</td>
			<td>6</td>
			<td>7</td>
		</tr>
		<tr>
			<th>Linha 2</th>
			<td>8</td>
			<td>9</td>
			<td>10</td>
			<td>11</td>
			<td>12</td>
			<td>13</td>
			<td>14</td>
		</tr>
	</BrTBody>
</BrTable>

```jsx
<BrTable full-width responsive>
	<BrTHead>
		<tr>
			<th>#</th>
			<th>Coluna 1</th>
			<th>Coluna 2</th>
			<th>Coluna 3</th>
			<th>Coluna 4</th>
			<th>Coluna 5</th>
			<th>Coluna 6</th>
			<th>Coluna 7</th>
		</tr>
	</BrTHead>
	<BrTBody>
		<tr>
			<th>Linha 1</th>
			<td>1</td>
			<td>2</td>
			<td>3</td>
			<td>4</td>
			<td>5</td>
			<td>6</td>
			<td>7</td>
		</tr>
		<tr>
			<th>Linha 2</th>
			<td>8</td>
			<td>9</td>
			<td>10</td>
			<td>11</td>
			<td>12</td>
			<td>13</td>
			<td>14</td>
		</tr>
	</BrTBody>
</BrTable>
```

<style lang="scss">
@import '../../src/styles/index.scss'
</style>
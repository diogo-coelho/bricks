<script setup>
import BrSelect from '../../src/components/select/BrSelect.vue'
import BrSelectItem from '../../src/components/select/BrSelectItem.vue'
</script>

# BrSelect <Badge type="warning" text="alpha" />

`BrSelect` é um componente que permite a seleção de um item para dentro de uma lista pré-determinada.

<BrSelect>
	<BrSelectItem value="1">Item 1</BrSelectItem>
	<BrSelectItem value="2">Item 2</BrSelectItem>
	<BrSelectItem value="3">Item 3</BrSelectItem>
	<BrSelectItem value="4">Item 4</BrSelectItem>
	<BrSelectItem value="5">Item 5</BrSelectItem>
</BrSelect>

```jsx
<BrSelect>
	<BrSelectItem value="1">Item 1</BrSelectItem>
	<BrSelectItem value="2">Item 2</BrSelectItem>
	<BrSelectItem value="3">Item 3</BrSelectItem>
	<BrSelectItem value="4">Item 4</BrSelectItem>
	<BrSelectItem value="5">Item 5</BrSelectItem>
</BrSelect>
```

## Exemplos

### Label

Passe o atributo `label` para adicionar uma label no select.

<BrSelect label="Modelo de carro">
	<BrSelectItem value="1">Audi</BrSelectItem>
	<BrSelectItem value="2">Volkswagen</BrSelectItem>
	<BrSelectItem value="3">Mercedes-Benz</BrSelectItem>
</BrSelect>

```jsx
<BrSelect label="Modelo de carro">
	<BrSelectItem value="1">Audi</BrSelectItem>
	<BrSelectItem value="2">Volkswagen</BrSelectItem>
	<BrSelectItem value="3">Mercedes-Benz</BrSelectItem>
</BrSelect>
```

### Desabilitado

Passe o atributo `disabled` para desabilitar o elemento.

<BrSelect disabled>
	<BrSelectItem value="1">Item 1</BrSelectItem>
	<BrSelectItem value="2">Item 2</BrSelectItem>
	<BrSelectItem value="3">Item 3</BrSelectItem>
</BrSelect>

```jsx
<BrSelect disabled>
	<BrSelectItem value="1">Item 1</BrSelectItem>
	<BrSelectItem value="2">Item 2</BrSelectItem>
	<BrSelectItem value="3">Item 3</BrSelectItem>
</BrSelect>
```

### Select arredondado

Passe o atributo `pill` para deixar as bordas do select arredondadas.

<BrSelect pill class="mb-medium">
	<BrSelectItem value="1">Item 1</BrSelectItem>
	<BrSelectItem value="2">Item 2</BrSelectItem>
	<BrSelectItem value="3">Item 3</BrSelectItem>
</BrSelect>

<BrSelect pill label="Cidades">
	<BrSelectItem value="1">São Paulo</BrSelectItem>
	<BrSelectItem value="2">Rio de Janeiro</BrSelectItem>
	<BrSelectItem value="3">Belo Horizonte</BrSelectItem>
</BrSelect>

```jsx
<BrSelect pill>
	<BrSelectItem value="1">Item 1</BrSelectItem>
	<BrSelectItem value="2">Item 2</BrSelectItem>
	<BrSelectItem value="3">Item 3</BrSelectItem>
</BrSelect>

<BrSelect pill label="Cidades">
	<BrSelectItem value="1">São Paulo</BrSelectItem>
	<BrSelectItem value="2">Rio de Janeiro</BrSelectItem>
	<BrSelectItem value="3">Belo Horizonte</BrSelectItem>
</BrSelect>
```

### Tamanhos

Passe através do atributo `size` o tamanho que o select deve ter.

<BrSelect class="mb-medium" size="small">
	<BrSelectItem value="1">Item 1</BrSelectItem>
	<BrSelectItem value="2">Item 2</BrSelectItem>
	<BrSelectItem value="3">Item 3</BrSelectItem>
</BrSelect>

<BrSelect class="mb-medium" size="medium">
	<BrSelectItem value="1">Item 1</BrSelectItem>
	<BrSelectItem value="2">Item 2</BrSelectItem>
	<BrSelectItem value="3">Item 3</BrSelectItem>
</BrSelect>

<BrSelect class="mb-3x-large" size="large">
	<BrSelectItem value="1">Item 1</BrSelectItem>
	<BrSelectItem value="2">Item 2</BrSelectItem>
	<BrSelectItem value="3">Item 3</BrSelectItem>
</BrSelect>

<BrSelect class="mb-medium" label="Cidades" size="small">
	<BrSelectItem value="1">São Paulo</BrSelectItem>
	<BrSelectItem value="2">Rio de Janeiro</BrSelectItem>
	<BrSelectItem value="3">Belo Horizonte</BrSelectItem>
</BrSelect>

<BrSelect class="mb-medium" label="Cidades" size="medium">
	<BrSelectItem value="1">São Paulo</BrSelectItem>
	<BrSelectItem value="2">Rio de Janeiro</BrSelectItem>
	<BrSelectItem value="3">Belo Horizonte</BrSelectItem>
</BrSelect>

<BrSelect label="Cidades" size="large">
	<BrSelectItem value="1">São Paulo</BrSelectItem>
	<BrSelectItem value="2">Rio de Janeiro</BrSelectItem>
	<BrSelectItem value="3">Belo Horizonte</BrSelectItem>
</BrSelect>

```jsx
<BrSelect size="small">
	<BrSelectItem value="1">Item 1</BrSelectItem>
	<BrSelectItem value="2">Item 2</BrSelectItem>
	<BrSelectItem value="3">Item 3</BrSelectItem>
</BrSelect>

<BrSelect size="medium">
	<BrSelectItem value="1">Item 1</BrSelectItem>
	<BrSelectItem value="2">Item 2</BrSelectItem>
	<BrSelectItem value="3">Item 3</BrSelectItem>
</BrSelect>

<BrSelect size="large">
	<BrSelectItem value="1">Item 1</BrSelectItem>
	<BrSelectItem value="2">Item 2</BrSelectItem>
	<BrSelectItem value="3">Item 3</BrSelectItem>
</BrSelect>

<BrSelect label="Cidades" size="small">
	<BrSelectItem value="1">São Paulo</BrSelectItem>
	<BrSelectItem value="2">Rio de Janeiro</BrSelectItem>
	<BrSelectItem value="3">Belo Horizonte</BrSelectItem>
</BrSelect>

<BrSelect label="Cidades" size="medium">
	<BrSelectItem value="1">São Paulo</BrSelectItem>
	<BrSelectItem value="2">Rio de Janeiro</BrSelectItem>
	<BrSelectItem value="3">Belo Horizonte</BrSelectItem>
</BrSelect>

<BrSelect label="Cidades" size="large">
	<BrSelectItem value="1">São Paulo</BrSelectItem>
	<BrSelectItem value="2">Rio de Janeiro</BrSelectItem>
	<BrSelectItem value="3">Belo Horizonte</BrSelectItem>
</BrSelect>
```

### Item selecionado

É possível passar um item como pré-selecionado através da propriedade `selected`.

<BrSelect selected="Item 3">
	<BrSelectItem value="1">Item 1</BrSelectItem>
	<BrSelectItem value="2">Item 2</BrSelectItem>
	<BrSelectItem value="3">Item 3</BrSelectItem>
</BrSelect>

```jsx
<BrSelect selected="Item 3">
	<BrSelectItem value="1">Item 1</BrSelectItem>
	<BrSelectItem value="2">Item 2</BrSelectItem>
	<BrSelectItem value="3">Item 3</BrSelectItem>
</BrSelect>
```

## Eventos

| Nome          | Descrição                                                                              |
| ------------- | :------------------------------------------------------------------------------------: |
| on-change     | Evento emitido ao trocar a opção do select                                             |

<style lang="scss">
@import '../../src/styles/index.scss'
</style>
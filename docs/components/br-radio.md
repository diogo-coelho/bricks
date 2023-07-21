<script setup>
import { ref, onMounted } from 'vue'
import BrRadioGroup from '../../src/components/radio/BrRadioGroup.vue'
import BrRadio from '../../src/components/radio/BrRadio.vue'

const radio = ref(null)

const toggleRadioStatus = () => {
	alert(`Valor: ${ radio.value.checkedValue }`)
}

onMounted(() => console.log(radio.value.checkedValue))
</script>

# BrRadio <Badge type="warning" text="alpha" />

`BrRadio` permite que o usuário selecione uma única opção dentro de um grupo determinado.

<BrRadioGroup name="exemplo1" label="Select an option">
	<BrRadio value="1">Um</BrRadio>
	<BrRadio value="2">Dois</BrRadio>
	<BrRadio value="3">Três</BrRadio>
</BrRadioGroup>

```jsx
<BrRadioGroup name="exemplo1" label="Select an option">
	<BrRadio value="1">Um</BrRadio>
	<BrRadio value="2">Dois</BrRadio>
	<BrRadio value="3">Três</BrRadio>
</BrRadioGroup>
```

## Exemplos

### Valor inicial

Informe o `value` da opção que deseja deixar previamente selecionada.

<BrRadioGroup name="exemplo2" label="Select an option" value="3">
	<BrRadio value="1">Um</BrRadio>
	<BrRadio value="2">Dois</BrRadio>
	<BrRadio value="3">Três</BrRadio>
</BrRadioGroup>

```jsx
<BrRadioGroup name="exemplo2" label="Select an option" value="3">
	<BrRadio value="1">Um</BrRadio>
	<BrRadio value="2">Dois</BrRadio>
	<BrRadio value="3">Três</BrRadio>
</BrRadioGroup>
```

### Desabilitado

Passe o atributo `disabled` para desabilitar as opções do radio.

<BrRadioGroup name="exemplo3" label="Select an option">
	<BrRadio value="1" disabled>Um</BrRadio>
	<BrRadio value="2" disabled>Dois</BrRadio>
	<BrRadio value="3" disabled>Três</BrRadio>
</BrRadioGroup>

```jsx
<BrRadioGroup name="exemplo3" label="Select an option">
	<BrRadio value="1" disabled>Um</BrRadio>
	<BrRadio value="2" disabled>Dois</BrRadio>
	<BrRadio value="3" disabled>Três</BrRadio>
</BrRadioGroup>
```

### Tamanhos

Passe o atributo `size` para configurar o tamanho do componente.

<BrRadioGroup
	class="mb-small"
	name="exemplo4" 
	label="Select an option" 
	size="small"
	value="1"
>
	<BrRadio value="1">Um</BrRadio>
	<BrRadio value="2">Dois</BrRadio>
	<BrRadio value="3">Três</BrRadio>
</BrRadioGroup>

<BrRadioGroup 
	class="mb-large"
	name="exemplo5" 
	label="Select an option" 
	size="medium"
	value="1"
>
	<BrRadio value="1">Um</BrRadio>
	<BrRadio value="2">Dois</BrRadio>
	<BrRadio value="3">Três</BrRadio>
</BrRadioGroup>

<BrRadioGroup
	name="exemplo6" 
	label="Select an option" 
	size="large"
	value="1"
>
	<BrRadio value="1">Um</BrRadio>
	<BrRadio value="2">Dois</BrRadio>
	<BrRadio value="3">Três</BrRadio>
</BrRadioGroup>

```jsx
<BrRadioGroup name="exemplo4" label="Select an option" size="small">
	<BrRadio value="1">Um</BrRadio>
	<BrRadio value="2">Dois</BrRadio>
	<BrRadio value="3">Três</BrRadio>
</BrRadioGroup>

<BrRadioGroup name="exemplo5" label="Select an option" size="medium">
	<BrRadio value="1">Um</BrRadio>
	<BrRadio value="2">Dois</BrRadio>
	<BrRadio value="3">Três</BrRadio>
</BrRadioGroup>

<BrRadioGroup name="exemplo6" label="Select an option" size="large">
	<BrRadio value="1">Um</BrRadio>
	<BrRadio value="2">Dois</BrRadio>
	<BrRadio value="3">Três</BrRadio>
</BrRadioGroup>
```

### Pegando o valor do radio

O componente radio, através do método do Vue.js `defineExpose`, expõe a variável `checkedValue` para ser lida pelo componente pai. Além disso, o componente emite um evento chamado `on-change`, que reage sempre que o valor do input é alterado.

No exemplo abaixo, é possível pegar o valor atual do componente através do hook `onMounted`, e depois através da função `toggleRadioStatus`.

<BrRadioGroup
	ref="radio"
	class="mb-small"
	name="exemplo7" 
	label="Select an option" 
	size="small"
	value="1"
	@on-change="toggleRadioStatus"
>
	<BrRadio value="1">Um</BrRadio>
	<BrRadio value="2">Dois</BrRadio>
	<BrRadio value="3">Três</BrRadio>
</BrRadioGroup>

```vue
<BrRadioGroup
	ref="radio"
	class="mb-small"
	name="exemplo7" 
	label="Select an option" 
	size="small"
	value="1"
	@on-change="toggleRadioStatus"
>
	<BrRadio value="1">Um</BrRadio>
	<BrRadio value="2">Dois</BrRadio>
	<BrRadio value="3">Três</BrRadio>
</BrRadioGroup>

<script setup>
const radio = ref(null)

onMounted(() => {
	console.log(radio.value.checkedValue) // Aqui o valor inicial será true devido ao atributo 'checked'
})

const toggleRadioStatus = () => {
	alert(`Valor: ${ checkbox.value.checkedValue }`) // Aqui o valor alternará de acordo com o status emitido
}
</script>
```

## Eventos

| Nome          | Descrição                                                                              |
| ------------- | :------------------------------------------------------------------------------------: |
| on-change     | Evento emitido ao alternar o valor entre true e false                                  |

<style lang="scss">
@import '../../src/styles/index.scss'
</style>
<script setup>
import { ref, onMounted } from 'vue'
import BrCheckbox from '../../src/components/checkbox/BrCheckbox.vue'

const checkbox = ref(null)

const toggleCheckboxStatus = () => {
	alert(`Valor: ${ checkbox.value.checkedValue }`)
}

onMounted(() => console.log(checkbox.value.checkedValue))
</script>

# BrCheckbox <Badge type="warning" text="alpha" />

`BrCheckbox` fornece um input que alterna as opções de verdadeiro ou falso.
<BrCheckbox>Select this option</BrCheckbox>

```vue
<BrCheckbox>Select this option</BrCheckbox>
```

## Exemplos

### Checked

Passe o atributo `checked` para iniciar o estado inicial do input como verdadeiro.

<BrCheckbox checked>Select this option</BrCheckbox>

```vue
<BrCheckbox checked>Select this option</BrCheckbox>
```

### Desabilitado

Passe o atributo `disabled` para desabilitar o componente.

<BrCheckbox disabled>Select this option</BrCheckbox>

```vue
<BrCheckbox disabled>Select this option</BrCheckbox>
```

### Tamanhos

Passe o atributo `size` para configurar o tamanho do componente.

<div class="w-full">
	<BrCheckbox class="w-full mb-small" size="small" checked>Select this option</BrCheckbox>
	<BrCheckbox class="w-full mb-small" size="medium" checked>Select this option</BrCheckbox>
	<BrCheckbox class="w-full mb-small" size="large" checked>Select this option</BrCheckbox>
</div>

```vue
<BrCheckbox size="small" checked>Select this option</BrCheckbox>
<BrCheckbox size="medium" checked>Select this option</BrCheckbox>
<BrCheckbox size="large" checked>Select this option</BrCheckbox>
```

### Pegando o valor do checkbox

O componente checkbox, através do método do Vue.js `defineExpose`, expõe a variável `checkedValue` para ser lida pelo componente pai. Além disso, o componente emite um evento chamado `on-change`, que reage sempre que o valor do input é alterado.

No exemplo abaixo, é possível pegar o valor atual do componente através do hook `onMounted`, e depois através da função `toggleCheckboxStatus`.

<BrCheckbox  ref="checkbox" @on-change="toggleCheckboxStatus" checked>Select this option</BrCheckbox>

```vue
<BrCheckbox  
	ref="checkbox" 
	@on-change="toggleCheckboxStatus" 
	checked
>Select this option</BrCheckbox>

<script setup>
const checkbox = ref(null)

onMounted(() => {
	console.log(checkbox.value.checkedValue) // Aqui o valor inicial será true devido ao atributo 'checked'
})

const toggleCheckboxStatus = () => {
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
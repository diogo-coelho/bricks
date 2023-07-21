<script setup>
import { ref, onMounted } from 'vue'
import BrSwitch from '../../src/components/switch/BrSwitch.vue'

const switchRef = ref(null)

onMounted(() => {
	console.log(switchRef.value.checkedValue) // Aqui o valor inicial será true devido ao atributo 'checked'
})

const toggleSwitchStatus = () => {
	alert(`Valor: ${ switchRef.value.checkedValue }`) // Aqui o valor alternará de acordo com o status emitido
}
</script>

# BrSwitch <Badge type="warning" text="alpha" />

<BrSwitch class="mt-medium">Switch</BrSwitch>

```vue
<BrSwitch>Switch</BrSwitch>
```

## Exemplos

### Selecionado

Informe o atributo `checked` para setar o componente como selecionado.

<BrSwitch checked>Selecionado</BrSwitch>

```vue
<BrSwitch checked>Selecionado</BrSwitch>
```

### Desabilitado

Informe o atributo `disabled` para desabilitar o switch.

<BrSwitch disabled>Desabilitado</BrSwitch>

```vue
<BrSwitch disabled>Desabilitado</BrSwitch>
```

### Tamanhos

Passe o atributo `size` para configurar o tamanho do componente.

<div class="w-full flex flex-column">
	<BrSwitch class="mb-small" size="small" checked>Select this option</BrSwitch>
	<BrSwitch class="mb-medium" size="medium" checked>Select this option</BrSwitch>
	<BrSwitch class="mb-large" size="large" checked>Select this option</BrSwitch>
</div>

```vue
<BrSwitch size="small" checked>Select this option</BrSwitch>
<BrSwitch size="medium" checked>Select this option</BrSwitch>
<BrSwitch size="large" checked>Select this option</BrSwitch>
```

### Pegando o valor do switch

O componente switch expõe a variável `checkedValue` para ser lida pelo componente pai. Além disso, o componente emite um evento chamado `on-change`, que reage sempre que o valor do input é alterado.

No exemplo abaixo, é possível pegar o valor atual do componente através do hook `onMounted`, e depois através da função `toggleSwitchStatus`.

<BrSwitch ref="switchRef" @on-change="toggleSwitchStatus" checked>Switch</BrSwitch>

```vue
<BrSwitch   
	ref="switchRef" 
	@on-change="toggleSwitchStatus" 
	checked
>Switch</BrSwitch>

<script setup>
const switchRef = ref(null)

onMounted(() => {
	console.log(switch.value.checkedValue) // Aqui o valor inicial será true devido ao atributo 'checked'
})

const toggleSwitchStatus = () => {
	alert(`Valor: ${ switch.value.checkedValue }`) // Aqui o valor alternará de acordo com o status emitido
}
</script>
```

<style lang="scss">
@import '../../src/styles/index.scss'
</style>
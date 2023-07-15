<script setup>
import BrRadioGroup from '../../src/components/radio/BrRadioGroup.vue'
import BrRadio from '../../src/components/radio/BrRadio.vue'
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



<style lang="scss">
@import '../../src/styles/index.scss'
</style>
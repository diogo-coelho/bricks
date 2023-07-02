<script setup>
import { ref } from 'vue'
import BrModal from '../../src/components/modal/BrModal.vue'
import BrButton from '../../src/components/button/BrButton.vue'

const modalRef = ref(null)
const modalRef2 = ref(null)
const modalRef3 = ref(null)
const modalRef4 = ref(null)

function modal () {
	modalRef.value?.openModal()
}

function openModalWithNamedSlots () {
	modalRef2.value?.openModal()
}

function openModalWithCustomWidth () {
	modalRef3.value?.openModal()
}

function openModalWithClosurePrevention () {
	modalRef4.value?.openModal()
}

function closeModalRef2 () {
	modalRef2.value?.closeModal()
}

function closeModalRef3 () {
	modalRef3.value?.closeModal()
}

function closeModalRef4 () {
	modalRef4.value?.closeModal()
}

</script>

# BrModal <Badge type="warning" text="alpha" />

`BrModal` é uma janela suspensa que se sobrepõe ao conteúdo da página, com intuito de exibir uma informação ou aviso ao usuário.

<BrButton @on-click="modal">Open Modal</BrButton>
<BrModal ref="modalRef">Isso é um modal</BrModal>

```vue
<BrButton @on-click="modal">Open Modal</BrButton>
<BrModal ref="modalRef">Isso é um modal</BrModal>

<script setup>
const modalRef = ref(null)

function modal () {
	modalRef.value?.openModal()
}
</script>
```

## Exemplos

### Conteúdo do header e footer

O modal está seguimentado em slots nomeados que representam o `header` e o `footer`. Para renderizar o conteúdo dentro dessas estruturas, basta passar o conteúdo HTML dentro de uma tag `template` com o atributo `v-slot:header` ou `v-slot:footer`.

<BrButton @on-click="openModalWithNamedSlots">Open Modal</BrButton>
<BrModal ref="modalRef2">
	<template v-slot:header>
		<h1>Modal</h1>
	</template>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
	   Mauris id placerat erat. Ut at est nec velit fringilla finibus. 
	   Fusce varius orci suscipit lorem rutrum eleifend.</p>
	<template v-slot:footer>
		<BrButton @on-click="closeModalRef2">Close Modal</BrButton>
	</template>
</BrModal>

```vue
<BrButton @on-click="modal">Open Modal</BrButton>
<BrModal ref="modalRef">
	<template v-slot:header>
		<h1>Modal</h1>
	</template>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
	   Mauris id placerat erat. Ut at est nec velit fringilla finibus. 
	   Fusce varius orci suscipit lorem rutrum eleifend.</p>
	<template v-slot:footer>
		<br-button @on-click="closeModal">Close Modal</br-button>
	</template>
</BrModal>

<script setup>
const modalRef = ref(null)

function modal () {
	modalRef.value?.openModal()
}

function closeModal () {
	modalRef.value?.closeModal()
}
</script>
```

### Largura personalizada

Passe o atributo `customWidth` para atribuir um tamanho personalizado ao container do modal. O valor deve ser numérico e representa a largura em pixels

<BrButton @on-click="openModalWithCustomWidth">Open Modal</BrButton>
<BrModal ref="modalRef3" custom-width="700px">
	<template v-slot:header>
		<h1>Modal</h1>
	</template>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
	   Mauris id placerat erat. Ut at est nec velit fringilla finibus. 
	   Fusce varius orci suscipit lorem rutrum eleifend.</p>
	<template v-slot:footer>
		<BrButton @on-click="closeModalRef3">Close Modal</BrButton>
	</template>
</BrModal>

```vue
<BrButton @on-click="modal">Open Modal</BrButton>
<BrModal ref="modalRef" custom-width="700px">
	<template v-slot:header>
		<h1>Modal</h1>
	</template>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
	   Mauris id placerat erat. Ut at est nec velit fringilla finibus. 
	   Fusce varius orci suscipit lorem rutrum eleifend.</p>
	<template v-slot:footer>
		<BrButton @on-click="closeModal">Close Modal</BrButton>
	</template>
</BrModal>

<script setup>
const modalRef = ref(null)

function modal () {
	modalRef.value?.openModal()
}

function closeModal () {
	modalRef.value?.closeModal()
}
</script>
```

### Bloquear o fechamento do modal

Para bloquear a ação de fechar o modal quando o usuário clicar na área de sobreposição, passe como argumento o atributo `avoidCloseWhenOverlayIsClicked`. 

Caso não queria exibir o botão de fechamento padrão `X` basta passar o atributo `hideCloseButton`.

<BrButton @on-click="openModalWithClosurePrevention">Open Modal</BrButton>
<BrModal ref="modalRef4" 
	avoid-close-when-overlay-is-clicked 
	hide-close-button
>
	<template v-slot:header>
		<h1>Modal</h1>
	</template>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
	   Mauris id placerat erat. Ut at est nec velit fringilla finibus. 
	   Fusce varius orci suscipit lorem rutrum eleifend.</p>
	<template v-slot:footer>
		<BrButton @on-click="closeModalRef4">Close Modal</BrButton>
	</template>
</BrModal>

```vue
<BrButton @on-click="modal">Open Modal</BrButton>
<BrModal ref="modalRef" avoid-close-when-overlay-is-clicked hide-close-button>
	<template v-slot:header>
		<h1>Modal</h1>
	</template>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
	   Mauris id placerat erat. Ut at est nec velit fringilla finibus. 
	   Fusce varius orci suscipit lorem rutrum eleifend.</p>
	<template v-slot:footer>
		<BrButton @on-click="closeModal">Close Modal</BrButton>
	</template>
</BrModal>

<script setup>
const modalRef = ref(null)

function modal () {
	modalRef.value?.openModal()
}

function closeModal () {
	modalRef.value?.closeModal()
}
</script>
```
## Eventos

| Nome          | Descrição                                                                              |
| ------------- | :------------------------------------------------------------------------------------: |
| on-closed     | Evento emitido ao fechar o modal                                                       |

<style lang="scss">
@import '../../src/styles/index.scss'
</style>
<script setup>
import { ref } from 'vue'
import BrModal from '../../src/components/modal/BrModal.vue'
import BrButton from '../../src/components/button/BrButton.vue'

const modalRef = ref(null)

function modal () {
	modalRef.value?.openModal()
}
</script>

# BrModal <Badge type="warning" text="alpha" />

`BrModal` é uma janela suspensa que se sobrepõe ao conteúdo da página, com intuito de exibir uma informação ou aviso ao usuário.

<BrButton @click="modal">Open Modal</BrButton>
<BrModal ref="modalRef"></BrModal>

```vue
<BrButton @click="modal">Open Modal</BrButton>
<BrModal ref="modalRef"></BrModal>

<script setup>
const modalRef = ref(null)

function modal () {
	modalRef.value?.openModal()
}
</script>
```
<style lang="scss">
@import '../../src/styles/index.scss'
</style>
<script setup>
import { ref, onMounted, createApp } from 'vue'
import BrAlert from '../../src/components/alert/BrAlert.vue'
import BrButton from '../../src/components/button/BrButton.vue'

const count = ref(0)
const alert = ref(null)
const toast = ref(null)
const toastPrimary = ref(null)
const toastSuccess = ref(null)
const toastNeutral = ref(null)
const toastWarning = ref(null)
const toastDanger = ref(null)

function showAlert() {
	alert.value.showAlert()
}

function showToast() {
	toast.value.toast()
}

function showToastDynamically(variant) {
	let toastName = `toast${variant.charAt(0).toUpperCase() + variant.slice(1)}`
	this[toastName].toast()
}

function notification (message, variant = "primary", duration = "3000") {
	const temporaryDiv = document.createElement("div")
	const instance = createApp(BrAlert, { 
		variant,
		duration, 
		closable: true 
	}).mount(temporaryDiv)

	instance.$el.querySelector('.message > div:last-child').textContent += message
	document.body.appendChild(instance.$el)
	
	instance.toast()
}

function createNewToast () {
	count.value++
	notification(`Esta é a notificação nº ${ count.value }`)
}

</script>

# BrAlert <Badge type="warning" text="beta" />

`BrAlert` providencia mensagens de contexto para o usuário do sistema.
<BrAlert>Este é um alerta padrão</BrAlert>

```vue
<BrAlert>Este é um alerta padrão</BrAlert>
```

## Exemplos

### Variantes

Passe o atributo `variant` para configurar a variante do alerta.

<div class="w-full">
	<BrAlert class="mb-small" variant="primary">
		<strong>Info</strong>
		<p>Esta é uma mensagem de informação</p>
	</BrAlert>
	<BrAlert class="mb-small" variant="success">
		<strong>Dados salvos</strong>
		<p>Os dados foram salvos com sucesso</p>
	</BrAlert>
	<BrAlert class="mb-small" variant="neutral">
		<strong>Configurações atualizadas</strong>
		<p>As configurações foram atualizadas</p>
	</BrAlert>
	<BrAlert class="mb-small" variant="warning">
		<strong>Tempo de sessão excedido</strong>
		<p>Acesse novamente usando suas credenciais</p>
	</BrAlert>
	<BrAlert variant="danger">
		<strong>Acesso negado</strong>
		<p>Suas credenciais não tem permissão para esse acesso</p>
	</BrAlert>
</div>

```jsx 
<BrAlert variant="primary">
	<strong>Info</strong>
	<p>Esta é uma mensagem de informação</p>
</BrAlert>
<BrAlert variant="success">
	<strong>Dados salvos</strong>
	<p>Os dados foram salvos com sucesso</p>
</BrAlert>
<BrAlert variant="neutral">
	<strong>Configurações atualizadas</strong>
	<p>As configurações foram atualizadas</p>
</BrAlert>
<BrAlert variant="warning">
	<strong>Tempo de sessão excedido</strong>
	<p>Acesse novamente usando suas credenciais</p>
</BrAlert>
<BrAlert variant="danger">
	<strong>Acesso negado</strong>
	<p>Suas credenciais não tem permissão para esse acesso</p>
</BrAlert>
```

### Botão para fechar

Através do atributo `closable` é exibido um botão que permite que o alerta seja fechado

<BrAlert class="mb-small" closable>
	<p>Ao clicar no botão X, o alerta deve se fechar</p>
</BrAlert>

```vue
<BrAlert closable>Ao clicar no botão X, o alerta deve se fechar</BrAlert>
```

### Sem ícone

Passe o atributo `no-icons` para desabilitar a exibição do ícone dentro do alerta

<BrAlert class="mb-small" no-icons>
	<p>Esse alerta não tem nenhum ícone</p>
</BrAlert>

```vue
<BrAlert no-icons>Esse alerta não tem nenhum ícone</BrAlert>
```

### Duração

Ao passar o atributo `duration`, o alerta será escondido depois do período de tempo determinado.

<BrButton id="button" @click="showAlert">Abrir Alert</BrButton>
<BrAlert class="mt-medium mb-medium" ref="alert" duration="3000" closable>Esse alerta deve fechar em 3 segundos</BrAlert>

```vue
<BrButton id="button" @click="showAlert">Abrir Alert</BrButton>
<BrAlert ref="alert" duration="3000" closable>Esse alerta deve fechar em 3 segundos</BrAlert>

<script setup>
const alert = ref(null)

function showAlert() {
	alert.value.showAlert()
}
</script>
```

### Toast

Para usar o elemento de alerta como um `toast`, basta passar o atributo `duration` com a duração de tempo de exibição do toast, e chamar a função `toast()` através do elemento alert. 

É possível ainda configurar o local onde o toast será exibido através da função global `setToastPosition()`, passando como parâmetros uma string nos seguintes formatos: `top-right`, `top-left`, `bottom-right`ou `bottom-left`.

<BrButton @click="showToast" variant="primary">Abrir Toast</BrButton>
<BrAlert class="mt-medium mb-medium" ref="toast" duration="3000" closable>
	<strong>Toast</strong>
	<p>Esta é uma mensagem de toast</p>
</BrAlert>

```vue
<BrButton @click="showToast" variant="primary">Abrir Toast</BrButton>
<BrAlert ref="toast" duration="3000" closable>
	<strong>Toast</strong>
	<p>Esta é uma mensagem de toast</p>
</BrAlert>

<script setup>
const toast = ref(null)

function showToast() {
	toast.value.toast()
}
</script>
```

### Notificações de Toast

Caso queira apresentar um alerta como uma notificação de toast, você pode criar o alerta e chamá-lo através da função `toast()`. Ao passar o atributo `variant` para o alerta, ele já vai estar com a configuração visual apropriada para o tipo de mensagem que deverá ser exibida.

<BrButton class="mr-x-small" @click="showToastDynamically('primary')" variant="primary">Primary</BrButton>
<BrButton class="mr-x-small" @click="showToastDynamically('success')" variant="success">Success</BrButton>
<BrButton class="mr-x-small" @click="showToastDynamically('neutral')" variant="neutral">Neutral</BrButton>
<BrButton class="mr-x-small" @click="showToastDynamically('warning')" variant="warning">Warning</BrButton>
<BrButton @click="showToastDynamically('danger')" variant="danger">Danger</BrButton>

<BrAlert ref="toastPrimary" duration="5000" closable>
	<strong>Info</strong>
	<p>Esta é uma mensagem de informação</p>
</BrAlert>

<BrAlert ref="toastSuccess" variant="success" duration="5000" closable>
	<strong>Dados salvos</strong>
	<p>Os dados foram salvos com sucesso</p>
</BrAlert>

<BrAlert ref="toastNeutral" variant="neutral" duration="5000" closable>
	<strong>Configurações atualizadas</strong>
	<p>Suas configurações de aplicação foram atualizadas</p>
</BrAlert>

<BrAlert ref="toastWarning" variant="warning" duration="5000" closable>
	<strong>Tempo de sessão excedido</strong>
	<p>Acesse novamente usando suas credenciais</p>
</BrAlert>

<BrAlert ref="toastDanger" variant="danger" duration="5000" closable>
	<strong>Acesso negado</strong>
	<p>Suas credenciais não tem permissão para esse acesso</p>
</BrAlert>

```vue
<BrButton @click="showToastDynamically('primary')" variant="primary">Primary</BrButton>
<BrButton @click="showToastDynamically('success')" variant="success">Success</BrButton>
<BrButton @click="showToastDynamically('neutral')" variant="neutral">Neutral</BrButton>
<BrButton @click="showToastDynamically('warning')" variant="warning">Warning</BrButton>
<BrButton @click="showToastDynamically('danger')" variant="danger">Danger</BrButton>

<BrAlert ref="toastPrimary" duration="5000" closable>
	<strong>Info</strong>
	<p>Esta é uma mensagem de informação</p>
</BrAlert>

<BrAlert ref="toastSuccess" variant="success" duration="5000" closable>
	<strong>Dados Salvos</strong>
	<p>Os dados foram salvos com sucesso</p>
</BrAlert>

<BrAlert ref="toastNeutral" variant="neutral" duration="5000" closable>
	<strong>Configurações atualizadas</strong>
	<p>Suas configurações de aplicação foram atualizadas</p>
</BrAlert>

<BrAlert ref="toastWarning" variant="warning" duration="5000" closable>
	<strong>Tempo de sessão excedido</strong>
	<p>Acesse novamente usando suas credenciais</p>
</BrAlert>

<BrAlert ref="toastDanger" variant="danger" duration="5000" closable>
	<strong>Acesso negado</strong>
	<p>Suas credenciais não tem permissão para esse acesso</p>
</BrAlert>

<script setup>
const toastPrimary = ref(null)
const toastSuccess = ref(null)
const toastNeutral = ref(null)
const toastWarning = ref(null)
const toastDanger = ref(null)

function showToastDynamically(variant) {
	let toastName = `toast${variant.charAt(0).toUpperCase() + variant.slice(1)}`
	this[toastName].toast()
}
</script>
```

### Criando Toasts de forma dinâmica

É possível criar toasts de forma dinâmica, usando Javascript para instanciar o componente `BrAlert` através do método `createApp`, passando obrigatoriamente os atributos `duration` e `closable`. Adicione o conteúdo da mensagem no interior do elemento, acrescentando-o no HTML e, por fim, chamando a função `toast()`

<BrButton @click="createNewToast" variant="primary">Create Toast</BrButton>

```vue
<BrButton @click="createNewToast" variant="primary">Create Toast</BrButton>

<script setup>
const count = ref(0)

function notification (message, variant = "primary", duration = "3000") {
	const temporaryDiv = document.createElement("div")
	const instance = createApp(BrAlert, { 
		variant,
		duration, 
		closable: true 
	}).mount(temporaryDiv)

	instance.$el.querySelector('.message > div:last-child').textContent += message
	document.body.appendChild(instance.$el)
	
	instance.toast()
}

function createNewToast () {
	count.value++
	notification(`Esta é a notificação nº ${ count.value }`)
}
</script>
```
<style lang="scss">
@import '../../src/styles/index.scss'
</style>
<script setup>
import BrAlert from '../../src/components/alert/BrAlert.vue'
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
	<BrAlert class="mr-x-small" variant="primary">
		<strong>Info</strong>
		<p>Esta é uma mensagem de informação</p>
	</BrAlert>
	<BrAlert class="mr-x-small" variant="success">
		<strong>Dados salvos</strong>
		<p>Os dados foram salvos com sucesso</p>
	</BrAlert>
	<BrAlert class="mr-x-small" variant="neutral">
		<strong>Configurações atualizadas</strong>
		<p>As configurações foram atualizadas</p>
	</BrAlert>
	<BrAlert class="mr-x-small" variant="warning">
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

<style lang="scss">
@import '../../src/styles/index.scss'
</style>
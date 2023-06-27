<script setup>
import BrInput from '../../src/components/input/BrInput.vue'
</script>

# BrInput <Badge type="warning" text="alpha" />

`BrInput` disponibiliza um campo de busca no qual o usuário pode inserir dados.
<BrInput />

```vue
	<BrInput></BrInput>
```

## Exemplos

### Label

Passe o atributo `label` para adicionar uma label no input.

<BrInput label="Endereço" />

```vue
<BrInput label="Endereço" />
```
### Desabilitado

Passe o atributo `disabled` para desabilitar o elemento.

<BrInput label="Endereço" disabled />

```vue
<BrInput label="Endereço" disabled />
```

### Input arredondado

Passe o atributo `pill` para deixar as bordas do input arredondadas.

<BrInput class="mb-small"  pill />

<BrInput label="Email do usuário" pill />

```vue 
<BrInput pill />

<BrInput label="Email" pill />
```

### Placeholder

Insira um placeholder no input através do atributo `placeholder`

<BrInput placeholder="Digite alguma coisa aqui"></BrInput>

```vue
<BrInput placeholder="Digite alguma coisa aqui"></BrInput>
```

### Tamanhos

Passe através do atributo `size` o tamanho que o input deve ter.

<div class="inline-block w-full">
	<BrInput class="mb-small" placeholder="Esse é um input pequeno" label="Input pequeno" size="small" />
	<BrInput class="mb-small" placeholder="Esse é um input médio" label="Input médio" size="medium" />
	<BrInput placeholder="Esse é um input grande" label="Input grande" size="large" />
</div>

```vue
<BrInput placeholder="Esse é um input pequeno" label="Input pequeno" size="small" />
<BrInput placeholder="Esse é um input médio" label="Input médio" size="medium" />
<BrInput placeholder="Esse é um input grande" label="Input grande" size="large" />
```

### Tipos de Input

Determine o tipo do input através do atributo `type`.

<div class="inline-block w-full">
	<BrInput class="mb-small" label="Email" type="email" />
	<BrInput class="mb-small" label="Número" type="number" />
	<BrInput label="Data" type="date" />
</div>

```vue
<BrInput label="Email" type="email" />
<BrInput label="Número" type="number" />
<BrInput label="Data" type="date" />
```

### Input com botão de sufixo

É possível criar um botão de ícone como sufixo no elemento input, que acionará a chamada de ação do elemento, através do atributo `suffix`.

<BrInput class="mb-small" label="Buscar" type="search" suffix=""/>

```vue
<BrInput class="mb-small" label="Buscar" type="search" suffix=""/>
```


<style lang="scss">
@import '../../src/styles/index.scss'
</style>
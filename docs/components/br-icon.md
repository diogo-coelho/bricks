<script setup>
import { computed } from 'vue'
import BrIcon from '../../src/components/icon/BrIcon.vue'
import * as Icons from '../../src/icons/icons'

const convertStringComponentName = (str) => {
	const chars = str.split('')
	const newChars = chars.map((char, index) => {
		if (/[A-Z]/.test(char)) {
			return `${index !== 0 ? '-' : ''}${char.toLowerCase()}`
		}
		return char
	})
	return newChars.join().replace(/\,/g, '')
}

const computedComponents = computed(() => {
	return Object.keys(Icons).map(string => { return convertStringComponentName(string) })
})
</script>

# BrIcon <Badge type="warning" text="alpha" />

`BrIcon` provê ícones para representação visual dentro da aplicação.

<BrIcon name="br-icon-beer-outline"></BrIcon>

```vue
<BrIcon name="br-icon-beer-outline"></BrIcon>
```

## Exemplos

### Nome

Para renderizar o componente é necessário passar o atributo `name`, correspondendo ao nome do ícone dentro da biblioteca, ou o caminho do arquivo `svg`, caso queira gerar um ícone personalizado.

<BrIcon name="br-icon-balloon"></BrIcon>

```vue
<BrIcon name="br-icon-balloon"></BrIcon>
```

### Cores

Você pode definir uma cor personalizada para o ícone através do atributo `color`.

<BrIcon name="br-icon-basketball-sharp" color="var(--br-color-primary-500)"></BrIcon>

```vue
<BrIcon name="br-icon-basketball-sharp" color="var(--br-color-primary-500)"></BrIcon>
```

## Ícones personalizados

Você também pode definir um ícone personalizado, passando o caminho do ícone através do atributo `src`.

<BrIcon src="../images/html-5-logo.png"></BrIcon>

```vue
<BrIcon src="../images/html-5-logo.png"></BrIcon>
```

## Ícones da biblioteca

`Bricks` utiliza a biblioteca de ícones [Ionicons](https://ionic.io/ionicons). Abaixo segue a lista de ícones disponíveis:

<div class="flex flex-wrap w-full">
	<div 
		class="icon-card"
		v-for="component in computedComponents"
		:key="`icon-${ component }`"
	>
		<BrIcon	:name="component" class="mb-small"></BrIcon>
		<span>{{ component }}</span>
	</div>
</div>

<style lang="scss">
@import '../../src/styles/index.scss';

.icon-card {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: var(--br-spacing-small);
	width: 100px;
	margin-bottom: 10px;
	margin-right: 10px;
	background-color: var(--br-color-neutral-50);
	border-radius: var(--br-border-radius-medium);

	span {
		text-align:center;
		font-size: var(--br-font-size-x-small)
	}
}
</style>
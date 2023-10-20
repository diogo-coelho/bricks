<script setup>
import BrTooltip from '../../src/components/tooltip/BrTooltip.vue'
import BrButton from '../../src/components/button/BrButton.vue'
</script>

# BrTooltip <Badge type="warning" text="alpha" />

`BrTooltip` apresenta informação adicional com base numa ação do usuário.

<BrTooltip content="Isso aqui é um tooltip">
	<BrButton>Passe o mouse sobre o botão</BrButton>
</BrTooltip>

```jsx
<BrTooltip content="Isso aqui é um tooltip">
	<BrButton>Passe o mouse sobre o botão</BrButton>
</BrTooltip>
```

<style lang="scss">
@import '../../src/styles/index.scss'
</style>
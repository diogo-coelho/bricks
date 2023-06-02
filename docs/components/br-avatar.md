<script setup>
import BrAvatar from '../../src/components/avatar/BrAvatar.vue'
</script>

# BrAvatar <Badge type="warning" text="beta" />

`BrAvatar` é um componente para representar pessoas ou entidades.
<BrAvatar></BrAvatar>

```vue
<BrAvatar></BrAvatar>
```

## Exemplos

### Iniciais

É possível passar as iniciais do usuário através do atributo `initials`.

<BrAvatar initials="DC"></BrAvatar>

```vue
<BrAvatar initials="DC"></BrAvatar>
```

### Imagens

Caso queira renderizar uma imagem dentro do componente de avatar, passe o endereço da imagem através do atributo `image`.

<div class="inline-flex">
	<BrAvatar class="mr-2x-small" image="https://www.w3schools.com/html/img_girl.jpg"></BrAvatar>
	<BrAvatar class="mr-2x-small" image="https://www.w3schools.com/html/pic_trulli.jpg"></BrAvatar>
</div>

```vue
<BrAvatar image="https://www.w3schools.com/html/img_girl.jpg"></BrAvatar>
<BrAvatar image="https://www.w3schools.com/html/pic_trulli.jpg"></BrAvatar>
```

<style lang="scss">
@import '../../src/styles/index.scss'
</style>
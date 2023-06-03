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
	<BrAvatar class="mr-small" image="https://www.w3schools.com/html/img_girl.jpg"></BrAvatar>
	<BrAvatar class="mr-small" image="https://www.w3schools.com/html/pic_trulli.jpg"></BrAvatar>
</div>

```vue
<BrAvatar image="https://www.w3schools.com/html/img_girl.jpg"></BrAvatar>
<BrAvatar image="https://www.w3schools.com/html/pic_trulli.jpg"></BrAvatar>
```

### Formatos

Para alterar o formato do avatar, passe uma das opções abaixo através do atributo `shape`

<div class="inline-flex">
	<BrAvatar class="mr-small" shape="square"></BrAvatar>
	<BrAvatar class="mr-small" shape="rounded"></BrAvatar>
	<BrAvatar shape="circle"></BrAvatar>
</div>

```vue
<BrAvatar shape="square"></BrAvatar>
<BrAvatar shape="rounded"></BrAvatar>
<BrAvatar shape="circle"></BrAvatar>
```

### Ícone personalizado

É possível customizar o ícone do avatar passando o nome do ícone através do atributo `custom-icon`.
Confira a lista de ícones disponíveis aqui.

<div class="inline-flex">
	<BrAvatar class="mr-small" custom-icon="br-icon-insert-photo"></BrAvatar>
	<BrAvatar class="mr-small" custom-icon="br-icon-insert-emoticon"></BrAvatar>
	<BrAvatar custom-icon="br-icon-directions-bike"></BrAvatar>
</div>

```vue
<BrAvatar custom-icon="br-icon-insert-photo"></BrAvatar>
<BrAvatar custom-icon="br-icon-insert-emoticon"></BrAvatar>
<BrAvatar custom-icon="br-icon-directions-bike"></BrAvatar>
```

### Agrupamento de avatares

Através da classe `br-group-avatar`, você pode fazer o agrupamento de vários avatares.

<div class="br-group-avatar">
	<BrAvatar image="https://www.w3schools.com/html/img_girl.jpg"></BrAvatar>
	<BrAvatar image="https://www.w3schools.com/html/pic_trulli.jpg"></BrAvatar>
	<BrAvatar image="https://www.w3schools.com/html/img_chania.jpg"></BrAvatar>
	<BrAvatar image="https://www.w3schools.com/html/img_girl.jpg"></BrAvatar>
</div>

```jsx
<div class="br-group-avatar">
	<BrAvatar image="https://www.w3schools.com/html/img_girl.jpg"></BrAvatar>
	<BrAvatar image="https://www.w3schools.com/html/pic_trulli.jpg"></BrAvatar>
	<BrAvatar image="https://www.w3schools.com/html/img_chania.jpg"></BrAvatar>
	<BrAvatar image="https://www.w3schools.com/html/img_girl.jpg"></BrAvatar>
</div>
```

<style lang="scss">
@import '../../src/styles/index.scss'
</style>
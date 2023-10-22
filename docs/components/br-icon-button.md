<script setup>
import BrIconButton from '../../src/components/button/BrIconButton.vue'
</script>

# BrIconButton <Badge type="warning" text="alpha" />

`BrIconButton` é um componente de botão que renderiza apenas um ícone em seu interior.

<BrIconButton name="settings-outline"></BrIconButton>

```vue
<BrIconButton name="settings-outline"></BrIconButton>
```

## Exemplos

### Cores

Você pode passar uma cor personalizada para o botão através do atributo `color`.

<BrIconButton name="call-sharp" color="#9949c1"></BrIconButton>

```vue
<BrIconButton name="call-sharp" color="#9949c1"></BrIconButton>
```

### Botão sem bordas

Caso queira criar um botão sem bordas, passe o atributo `no-borders` como prop.


<div class="inline-flex w-full">
	<BrIconButton class="mr-x-small" name="cafe-outline" no-borders></BrIconButton>
	<BrIconButton name="cafe" no-borders color="#9949c1"></BrIconButton>
</div>

```vue
<BrIconButton name="cafe-outline" no-borders></BrIconButton>
<BrIconButton name="cafe" no-borders color="#9949c1"></BrIconButton>
```

### Desabilitado

Para desabilitar o componente `BrIconButton`, passe o atributo `disabled` como uma propriedade.

<div class="inline-flex w-full">
	<BrIconButton class="mr-x-small" name="bag-handle-sharp" disabled></BrIconButton>
	<BrIconButton class="mr-x-small" name="cafe-outline" no-borders disabled></BrIconButton>
	<BrIconButton name="cafe" no-borders color="#9949c1" disabled></BrIconButton>
</div>

```vue
<BrIconButton name="bag-handle-sharp" disabled></BrIconButton>
<BrIconButton name="cafe-outline" no-borders disabled></BrIconButton>
<BrIconButton name="cafe" no-borders color="#9949c1" disabled></BrIconButton>
```

### Tamanhos

É possível alterar o tamanho do botão através da variável `size`.

<div class="flex flex-row align-baseline justify-start w-auto">
	<BrIconButton class="mr-x-small" name="chatbubble-ellipses" no-borders size="small"></BrIconButton>
	<BrIconButton class="mr-x-small" name="chatbubble-ellipses" no-borders size="medium"></BrIconButton>
	<BrIconButton name="chatbubble-ellipses" size="large" no-borders></BrIconButton>
</div>

```vue
<BrIconButton class="mr-x-small" name="chatbubble-ellipses" no-borders size="small"></BrIconButton>
<BrIconButton class="mr-x-small" name="chatbubble-ellipses" no-borders size="medium"></BrIconButton>
<BrIconButton name="chatbubble-ellipses" no-borders size="large"></BrIconButton>
```

### Botão arredondado

Caso queria deixar o botão com o formato arredondado, passe o atributo `rounded` como prop.

<div class="flex flex-row align-end justify-start w-auto">
	<BrIconButton class="mr-x-small" name="chatbubble-ellipses" size="small" rounded></BrIconButton>
	<BrIconButton class="mr-x-small" name="chatbubble-ellipses" size="medium" rounded></BrIconButton>
	<BrIconButton name="chatbubble-ellipses" size="large" rounded></BrIconButton>
</div>

```vue
<BrIconButton class="mr-x-small" name="chatbubble-ellipses" size="small" rounded></BrIconButton>
<BrIconButton class="mr-x-small" name="chatbubble-ellipses" size="medium" rounded></BrIconButton>
<BrIconButton name="chatbubble-ellipses" size="large" rounded></BrIconButton>
```

## Eventos

| Nome          | Descrição                                                                              |
| ------------- | :------------------------------------------------------------------------------------: |
| on-click      | Evento emitido ao clicar no botão                                                      |
| on-focus      | Evento emitido ao focar no botão                                                       |
| on-blur       | Evento emitido ao remover o foco do botão                                              |

<style lang="scss">
@import '../../src/styles/index.scss'
</style>
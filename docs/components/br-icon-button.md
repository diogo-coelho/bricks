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

<BrIconButton name="cafe-outline" no-borders></BrIconButton>
<BrIconButton name="cafe" no-borders color="#9949c1"></BrIconButton>

```vue
<BrIconButton name="cafe-outline" no-borders></BrIconButton>
<BrIconButton name="cafe" no-borders color="#9949c1"></BrIconButton>
```

### Desabilitado

Para desabilitar o componente `BrIconButton`, passe o atributo `disabled` como uma propriedade.

<BrIconButton name="bag-handle-sharp" disabled></BrIconButton>

```vue
<BrIconButton name="bag-handle-sharp" disabled></BrIconButton>
```

<style lang="scss">
@import '../../src/styles/index.scss'
</style>
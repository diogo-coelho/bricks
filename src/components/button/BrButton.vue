<template>
  <button class="br-button" @click="onClick">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrButton',
  setup() {
    const onClick = (event: MouseEvent): void => {
      console.log('clicou no BrButton')
      console.log(event.target)
    }

    return {
      onClick,
    }
  },
})
</script>

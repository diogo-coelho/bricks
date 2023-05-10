<template>
  <input type="text" class="br-input" @click="onClick" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BrInput',
  setup() {
    const onClick = (event: MouseEvent) => {
      console.log('clicou no input')
      console.log(event.target)
    }

    return {
      onClick,
    }
  },
})
</script>

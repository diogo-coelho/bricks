<template>
  <div class="br-icon">
    <component :is="name" v-if="computedName" :color="color" />
    <img v-if="computedSource && !computedName" :src="computedSource" alt="ícone" />
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent } from 'vue'
import * as Icons from '../../icons/icons'
import { IconProps } from '../../types/_icon'

export default defineComponent({
  name: 'BrIcon',
  components: {
    ...Icons,
  },
  props: {
    /**
     * Set icon's name
     * @values string
     */
    name: {
      type: String,
      required: true,
    },
    /**
     * Set icon's color
     * @values string
     */
    color: {
      type: String,
      default: () => undefined,
    },
	/**
	 * Set icon's source
	 * @values string
	 */
	src: {
		type: String, 
		default: () => undefined
	}
  },
  setup(props: IconProps) {
    const convertStringComponentName = (str: string): string => {
      const chars = str.split('')
      const newChars = chars.map((char, index) => {
        if (/[A-Z]/.test(char)) {
          return `${index !== 0 ? '-' : ''}${char.toLowerCase()}`
        }
        return char
      })
      return newChars.join().replace(/,/g, '')
    }

    const computedName: ComputedRef<boolean> = computed(() => {
      const componentsArray = Object.keys(Icons).map((string) => {
        return convertStringComponentName(string)
      })
      return componentsArray.includes(props.name)
    })

	const computedSource: ComputedRef<string | undefined> = computed(() => {
		if (props.src) return props.src
		return undefined
	})

    return {
      computedName,
	  computedSource
    }
  },
})
</script>

<template>
  <div class="br-icon" :class="computedOutlineClass">
    <component v-if="computedName" :is="name" />
	<img v-else :src="name" alt="ícone" />
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
  },
  setup (props: IconProps) {
	const convertStringComponentName = (str: string): string => {
		const chars = str.split('')
		const newChars = chars.map((char, index) => {
			if (/[A-Z]/.test(char)) {
				return `${index !== 0 ? '-' : ''}${char.toLowerCase()}`
			}
			return char
		})
		return newChars.join().replace(/\,/g, '')
	}

	const computedName: ComputedRef<boolean> = computed(() => {
		const componentsArray = Object.keys(Icons).map(string => { return convertStringComponentName(string) })
		return componentsArray.includes(props.name)
	})

	const computedOutlineClass: ComputedRef<string | undefined> = computed(() => {
		if (computedName.value && props.name.includes('outline')) return 'outline'
		return undefined
	})
	
	return {
		computedName,
		computedOutlineClass
	}
  }
})
</script>

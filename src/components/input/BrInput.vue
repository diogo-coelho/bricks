<template>
  <div
    ref="BrInputRef"
    v-bind="$attrs"
    class="br-input"
    :class="[...rootClasses, { 'on-focus': onFocus }]"
  >
    <p
      v-if="computedLabel"
      ref="paragraphRef"
      :class="[...rootClasses, { 'on-focus': onFocus, label: computedLabel }]"
    >
      <span>
        {{ label }}
      </span>
    </p>
    <input
      ref="InputRef"
      name="input"
      :type="type"
      :placeholder="placeholder"
      :class="[
        {
          'label-less': !computedLabel,
          label: computedLabel,
          'on-focus': onFocus,
		  'has-suffix': suffix
        },
        ...rootClasses,
      ]"
      :style="{ width: inputWidthComputed + 'px' }"
      :disabled="disabled"
      @focusin="setOnFocus(true)"
      @focusout="setOnFocus(false)"
    />
    <button name="input"
	  v-if="suffix"
	  :class="rootClasses"
	>
		<component :is="suffix" />
	</button>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, Ref, ref } from 'vue'
import { InputProps } from '../../types/_input'
import * as Icons from '../../icons/icons'

export default defineComponent({
  name: 'BrInput',
  components: {
	...Icons
  },
  props: {
    /**
     * Type of input
     *
     */
    type: {
      type: String,
      default: () => 'text',
      validator: (value: string) => {
        return [
          'email',
          'number',
          'password',
          'date',
          'datetime-local',
          'month',
          'search',
          'tel',
          'time',
          'url',
          'text',
          'week',
        ].includes(value)
      },
    },
    /**
     * size of input
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => 'small',
      validator: (value: string) => {
        return ['small', 'medium', 'large'].includes(value)
      },
    },
    /**
     * disable input
     * @values true, false
     */
    disabled: {
      type: Boolean,
      default: () => undefined,
    },
    /**
     * set input as pill format
     * @values true, false
     */
    pill: {
      type: Boolean,
      default: () => undefined,
    },
    /**
     * set a label to input
     */
    label: {
      type: String,
      default: () => '',
    },
    /**
     * Set a placeholder
     */
    placeholder: {
      type: String,
      default: () => undefined,
    },
	/**
     * Set a suffix icon
     * @values icon name
     */
	 suffix: {
      type: String,
      default: () => undefined,
    },
  },
  setup(props: InputProps) {
    const BrInputRef = ref(null)
    const InputRef = ref(null)
    const paragraphRef = ref(null)
    const onFocus: Ref<boolean> = ref(false)

    const rootClasses: ComputedRef<string[]> = computed(() => {
      return [
        props.size ? `${props.size}` : ``,
        computedDisabled.value ? `disabled` : '',
        computedPill.value ? `pill` : '',
      ]
    })

    const computedLabel: ComputedRef<boolean | undefined> = computed(() => {
      if (props.label !== '') return true
      return undefined
    })

    const computedDisabled: ComputedRef<boolean | undefined> = computed(() => {
      if (props.disabled) return true
      return undefined
    })

    const computedPill: ComputedRef<boolean | undefined> = computed(() => {
      if (props.pill) return true
      return undefined
    })

    const inputWidthComputed: ComputedRef<number> = computed(() => {
      const inputContainer = BrInputRef.value as unknown as HTMLElement
      const paragraphElement = paragraphRef.value as unknown as HTMLElement
      return inputContainer?.clientWidth - paragraphElement?.offsetWidth
    })

    const onClick = (event: MouseEvent) => {
      console.log('clicou no input')
      console.log(event.target)
    }

    const setOnFocus = (value: boolean): void => {
      onFocus.value = value
    }

    return {
      BrInputRef,
      InputRef,
      paragraphRef,
      onFocus,
      rootClasses,
      computedLabel,
      inputWidthComputed,
      computedDisabled,
      onClick,
      setOnFocus,
    }
  },
})
</script>

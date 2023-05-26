<template>
  <div
    ref="BrSelectRef"
    v-bind="$attrs"
    class="select"
    :class="{ disabled: computedDisabled, 'on-focus': onFocus }"
  >
    <input
      ref="InputRef"
      name="select"
      type="text"
      readonly
	  :value="selectedOption?.label"
	  @focusin="setOnFocus(true)"
	  @focusout="setOnFocus(false)"
      :class="{ active: active, 'label-less': !computedLabel }"
      @click="toggleSelectDropdown(!active)"
    />
    <p v-if="computedLabel">{{ label }}</p>
    <button name="select" @click="toggleSelectDropdown(!active)">
      <BrIconKeyboardArrowDown />
    </button>

    <teleport to="body">
      <div
        class="select-dropdown"
        :style="{
          display: active && !computedDisabled ? 'block' : 'none',
          width: dropdownWidth + 'px',
          top: dropdownElementPosition.top
            ? dropdownElementPosition.top + 2 + 'px'
            : '0px',
          left: dropdownElementPosition.left
            ? dropdownElementPosition.left + 'px'
            : '0px',
        }"
      >
        <ul>
          <br-select-item
            v-for="(item, i) in items"
            :key="`br-select-item-${i}`"
            :item="item"
			:selected="item.value === selectedOption?.value"
            @selected-option="setSelectValue"
          />
        </ul>
      </div>
    </teleport>
  </div>
</template>

<script lang="ts">
import {
  computed,
  ComputedRef,
  defineComponent,
  onMounted,
  PropType,
  Ref,
  ref,
  watch,
} from 'vue'
import BrSelectItem from '../select-item/BrSelectItem.vue'
import BrIconKeyboardArrowDown from '../../icons/icon-keyboard-arrow-down/BrIconKeyboardArrowDown.vue'
import {
  SelectProps,
  SelectOption,
  DropdownElementPosition,
} from '../../types/_select'

const ELEMENT_SIZE_DEFAULT = 39
const ELEMENT_SIZE_SMALL = 39
const ELEMENT_SIZE_MEDIUM = 39
const ELEMENT_SIZE_LARGE = 39

export default defineComponent({
  name: 'BrSelect',
  components: {
    BrSelectItem,
    BrIconKeyboardArrowDown,
  },
  props: {
    /**
     * Items of menu select dropdown
     * @values { value: string, label: string }[]
     */
    items: {
      type: Array as PropType<SelectOption[]>,
      default: () => [],
    },
    /**
     * Set label od select input
     * @values string
     */
    label: {
      type: String,
      default: () => '',
    },
    /**
     * Set element status
     * @values true, false
     */
    disabled: {
      type: Boolean,
    },
    /**
     * size of element
     * @values small, medium, large
     */
    size: {
      type: String,
      default: () => undefined,
      validator: (value: string) => {
        return ['small', 'medium', 'large'].indexOf(value) >= 0
      },
    },
	/**
	 * set selected value
	 * @values string
	 */
	selected: {
		type: String,
		default: () => undefined
	}
  },
  emits: ['on-change'],
  setup(props: SelectProps, { emit }) {
    const BrSelectRef = ref(null)
    const InputRef = ref(null)
    const dropdownWidth: Ref<number> = ref(0)
    const active: Ref<boolean> = ref(false)
    const dropdownElementPosition: Ref<DropdownElementPosition> = ref({
      top: undefined,
      left: undefined,
    })
	const selectedOption: Ref<SelectOption | undefined> = ref()
	const onFocus: Ref<boolean> = ref(false)

	watch(() => props.selected, () => {
		if (!props.selected) return
		selectedOption.value = props.items.find(item => item.label === props.selected)
	})

    const computedLabel: ComputedRef<boolean | undefined> = computed(() => {
      if (props.label !== '') return true
      return undefined
    })

    const computedDisabled: ComputedRef<boolean | undefined> = computed(() => {
      if (props.disabled) return true
      return undefined
    })

    const toggleSelectDropdown = (value: boolean): void => {
      setSelectDropdownPosition()
      active.value = value
    }

    const getHeightFromInputDropdown = (): number => {
      switch (props.size) {
        case 'small':
          return ELEMENT_SIZE_SMALL
        case 'medium':
          return ELEMENT_SIZE_MEDIUM
        case 'large':
          return ELEMENT_SIZE_LARGE
        default:
          return ELEMENT_SIZE_DEFAULT
      }
    }

    const setSelectDropdownPosition = (): void => {
      const inputElement = InputRef.value as unknown as HTMLInputElement
      if (!inputElement) return
      const elementOffsets = inputElement.getBoundingClientRect()

      if (
        elementOffsets.top + (getHeightFromInputDropdown() + 150) >
        screen.height
      ) {
        dropdownElementPosition.value = {
          top: elementOffsets.top - getHeightFromInputDropdown() - 2,
          left: elementOffsets.left,
        }
      } else {
        dropdownElementPosition.value = {
          top: elementOffsets.top + getHeightFromInputDropdown() + 2,
          left: elementOffsets.left,
        }
      }
    }

    const setDropdownWidth = (): void => {
      const elem = BrSelectRef.value as unknown as HTMLDivElement
      dropdownWidth.value = elem ? elem.clientWidth : 100
    }

    const setSelectValue = (item: SelectOption): void => {
	  selectedOption.value = item
	  toggleSelectDropdown(!active.value)
	  emit('on-change', selectedOption.value)
    }

	const setOnFocus = (value: boolean): void => {
	  onFocus.value = value
	}

    onMounted(() => {
      setDropdownWidth()
    })

    return {
      active,
      BrSelectRef,
      InputRef,
      dropdownWidth,
      computedLabel,
      computedDisabled,
      dropdownElementPosition,
	  selectedOption,
	  onFocus,
      setSelectValue,
      setDropdownWidth,
      toggleSelectDropdown,
	  setOnFocus,
    }
  },
})
</script>

<style></style>

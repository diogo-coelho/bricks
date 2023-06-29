<template>
  <div
    ref="BrSelectRef"
    v-click-outside="handleOutsideClick"
    v-bind="$attrs"
    class="br-select"
    :class="[...rootClasses, { 'on-focus': onFocus }]"
    @click="toggleSelectDropdown(!active, $event)"
  >
    <br-input
      ref="InputRef"
      readonly
      :current-value="selectedOption?.label"
      :label="label"
      :pill="pill"
      :size="size"
      :disabled="disabled"
      :suffix="'br-icon-keyboard-arrow-down'"
    ></br-input>

    <teleport to="body">
      <div
        class="br-select-dropdown"
        :class="[...rootClasses, { active: active && !computedDisabled }]"
        :style="{
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
            :active="item.value === selectedOption?.value"
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
} from 'vue'
import BrInput from '../input/BrInput.vue'
import BrSelectItem from '../select-item/BrSelectItem.vue'
import {
  SelectProps,
  SelectOption,
  DropdownElementPosition,
} from '../../types/_select'
import BrClickOutsideDirective from '../../directives/BrClickOutside/BrClickOutsideDirective'

const ELEMENT_SIZE_DEFAULT = 42
const ELEMENT_SIZE_SMALL = 42
const ELEMENT_SIZE_MEDIUM = 50
const ELEMENT_SIZE_LARGE = 58

export default defineComponent({
  name: 'BrSelect',
  directives: {
    ClickOutside: BrClickOutsideDirective,
  },
  components: {
    BrInput,
    BrSelectItem,
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
      default: () => undefined,
    },
    /**
     * Set pill border-radius
     * @values true, false
     */
    pill: {
      type: Boolean,
    },
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

    const computedSelected: ComputedRef<string | undefined> = computed(() => {
      if (!props.selected) return undefined
      return props.selected
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

    const rootClasses: ComputedRef<string[]> = computed(() => {
      return [
        props.size ? `${props.size}` : ``,
        computedDisabled.value ? `disabled` : '',
        computedPill.value ? `pill` : '',
      ]
    })

    const toggleSelectDropdown = (value: boolean, event?: MouseEvent): void => {
      if (event) {
        if (
          (BrSelectRef.value as unknown as HTMLDivElement).contains(
            event.target as HTMLElement
          )
        ) {
          setOnFocus(value)
          setSelectDropdownPosition()
          active.value = value
          return
        }
      }

      setOnFocus(value)
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
      const inputElement = InputRef.value as unknown as InstanceType<
        typeof BrInput
      >
      if (!inputElement) return
      const elementOffsets =
        (inputElement?.paragraphRef as unknown as HTMLInputElement)
          ? (
              inputElement?.paragraphRef as unknown as HTMLInputElement
            )?.getBoundingClientRect()
          : (
              inputElement?.InputRef as unknown as HTMLInputElement
            )?.getBoundingClientRect()

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
      toggleSelectDropdown(false)
      emit('on-change', selectedOption.value)
    }

    const setOnFocus = (value: boolean): void => {
      onFocus.value = value
    }

    const handleOutsideClick = (event: Event): void => {
      const elem = document.querySelector('.br-select') as HTMLDivElement
      if (!elem.contains(event.target as HTMLElement))
        toggleSelectDropdown(false)
    }

    const setSelectedOptionWithPropsValue = (): void => {
      if (!computedSelected.value) return
      selectedOption.value = props.items.find(
        (item) => item.label === computedSelected.value
      )
    }

    const onWindowResize = (): void => {
      window.addEventListener(
        'resize',
        () => {
          setSelectDropdownPosition()
          setDropdownWidth()
        },
        { passive: true }
      )
    }

    const onScroll = () => {
      window.addEventListener(
        'scroll',
        () => {
          setOnFocus(false)
          toggleSelectDropdown(false)
          setSelectDropdownPosition()
        },
        { passive: true }
      )
    }

    onMounted(() => {
      setDropdownWidth()
      onWindowResize()
      onScroll()
      setSelectedOptionWithPropsValue()
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
      rootClasses,
      setSelectValue,
      setDropdownWidth,
      toggleSelectDropdown,
      setOnFocus,
      handleOutsideClick,
      getHeightFromInputDropdown,
    }
  },
})
</script>

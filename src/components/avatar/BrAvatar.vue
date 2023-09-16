<template>
  <div class="br-avatar" :class="computedShape || ''" :style="computedImage">
    <div v-if="computedInitials">
      <span>{{ computedInitials }}</span>
    </div>
    <br-icon
      v-if="!computedInitials && !computedImage"
      :name="computedAvatar"
      :color="color"
    />
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent } from 'vue'
import { AvatarProps, AvatarImageStyle } from '../../types/_avatar'
import BrIcon from '../icon/BrIcon.vue'

export default defineComponent({
  name: 'BrAvatar',
  components: {
    BrIcon,
  },
  props: {
    /**
     * Set initials as avatar
     * @values string
     */
    initials: {
      type: String,
      default: () => undefined,
    },
    /**
     * Set a custom icon
     * @values string
     */
    customIcon: {
      type: String,
      default: () => undefined,
    },
    /**
     * Set an image
     * @values string
     */
    image: {
      type: String,
      default: () => undefined,
    },
    /**
     * Set the shape of avatar
     * @values square, rounded, circle
     */
    shape: {
      type: String,
      default: () => undefined,
      validator: (value: string) => {
        return ['square', 'rounded', 'circle'].indexOf(value) >= 0
      },
    },
    /**
     * Set the color of avatar
     * @values string
     */
    color: {
      type: String,
      default: () => `var(--br-color-white)`,
    },
  },
  setup(props: AvatarProps) {
    const computedAvatar: ComputedRef<string> = computed(() => {
      return props.customIcon ? props.customIcon : 'br-icon-person'
    })

    const computedInitials: ComputedRef<string | undefined> = computed(() => {
      return props.initials?.slice(0, 2)
    })

    const computedImage: ComputedRef<AvatarImageStyle | undefined> = computed(
      () => {
        if (!props.image) return
        return {
          backgroundImage: `url(${props.image})`,
          backgroundPosition: `center center`,
          backgroundSize: `cover`,
        }
      }
    )

    const computedShape: ComputedRef<string | undefined> = computed(() => {
      if (!props.shape) return undefined
      return props.shape
    })

    return {
      computedAvatar,
      computedInitials,
      computedImage,
      computedShape,
    }
  },
})
</script>

<template>
  <div class="avatar" :style="computedImage">
    <div v-if="computedInitials">
      <span>{{ computedInitials }}</span>
    </div>
    <component
      :is="computedAvatar"
      v-if="!computedInitials && !computedImage"
    />
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent } from 'vue'
import { AvatarProps, AvatarImageStyle } from '../../types/_avatar'
import * as Icons from '../../icons/icons'

export default defineComponent({
  name: 'BrAvatar',
  components: {
    ...Icons,
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
     * Set a image
     * @values string
     */
    image: {
      type: String,
      default: () => undefined,
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

    return {
      computedAvatar,
      computedInitials,
      computedImage,
    }
  },
})
</script>

<style></style>

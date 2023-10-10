export type ColorConfiguration = {
  disabled?: boolean
  color?: string
  variant?: string
  outline?: boolean
}

export function colorOnMouseOver(
  colorConfiguration: ColorConfiguration
): string {
  if (colorConfiguration.disabled) return `var(--br-color-neutral-200)`
  if (colorConfiguration.color) return colorConfiguration.color
  if (colorConfiguration.variant || colorConfiguration.outline)
    return `var(--br-color-white)`
  return `var(--br-color-primary-600)`
}

export function colorOnMouseOut(
  colorConfiguration: ColorConfiguration
): string | undefined {
  if (colorConfiguration.disabled) return `var(--br-color-neutral-200)`
  if (colorConfiguration.color) return colorConfiguration.color
  if (colorConfiguration.variant && !colorConfiguration.outline)
    return `var(--br-color-white)`
  if (colorConfiguration.variant && colorConfiguration.outline)
    return `var(--br-color-${colorConfiguration.variant}-500)`
  return `var(--br-color-neutral-500)`
}

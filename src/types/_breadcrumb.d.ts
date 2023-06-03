export type BreadcrumbItem = {
  text: string
  href?: string
}

export type BreadcrumbProps = {
  items: BreadcrumbItem[]
  customSeparator?: string
}

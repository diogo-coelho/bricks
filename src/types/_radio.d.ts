export type RadioGroupProps = {
	name: string
}

export type RadioProvidedAttributes = {
	name: string
	selectedRadio: RadioSelectedItem
}

export type RadioSelectedItem = {
	value: string
	checked: boolean
}

export type RadioProps = {
	value: string
}
const formatDateToStringDate = (currentDate: string | Date) : string => {
	const date = new Date(currentDate)
	let day = '' + (date.getDate())
	let month = '' + (date.getMonth() + 1)
	let year = date.getFullYear()

	if (month.length < 2) month = '0' + month
	if (day.length < 2) day = '0' + day

	return [day, month, year].join('/')
}

const formatDateToISO8601 = (currentDate: string) => {
	const dateParts = currentDate.split('/')
	return `${ dateParts[2] }-${ dateParts[1] }-${ dateParts[0] }`
}

export {
	formatDateToISO8601,
	formatDateToStringDate
}
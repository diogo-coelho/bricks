const express = require('express')
const path    = require('path')

var app = express()
var port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + 'public/index.html'))
})
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${ port }`)
})
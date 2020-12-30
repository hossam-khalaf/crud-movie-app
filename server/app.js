const express = require('express')

const app = express()

app.get('/', (req, res) => {
	res.send('Hi, Hossam')
})

app.listen(3001, () => {
	console.log('runnig on port 3001')
})

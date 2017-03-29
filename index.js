'use strict'

//here you can find all related to server and database


const app = require('./app')
const port = process.env.PORT || 3000


app.listen(port, () => {
	console.log(`opening server in http//localhost:${port}`)
})
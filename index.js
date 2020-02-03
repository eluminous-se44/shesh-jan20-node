const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Home')
})

app.get('/about', function (req, res) {
  res.send('About')
})

app.get('/contact', function (req, res) {
  res.send('Contact')
})

app.listen(3000, () => {
	
	console.log('App running on server 3000')

})

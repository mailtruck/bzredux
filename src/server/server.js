var express = require('express')
var path = require('path')
var compression = require('compression')
var axios = require('axios')

var app = express()

app.use(compression())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')))


app.get('/api/*', function (req, res) {
  console.log(req.url)
  var ticker = req.url.split('/').reverse()[0]
  console.log(ticker)
  axios.get('http://data.benzinga.com/rest/richquoteDelayed?symbols='+ticker)
  .then(response=>res.json(response.data)).catch((err)=>console.log(err))
})
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Server@:' + PORT)
})

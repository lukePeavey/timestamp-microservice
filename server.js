// server.js

var express = require('express');
var app = express();

// Use ejs for html templates
app.set('view engine', 'ejs');

// static files are served from public
app.use(express.static('public'));

// The root url servers the demo homepage
app.get("/", function (request, response) {
  response.render('index', {date: null, url: "home"})  
})

// Handles get requests that include at least one param
app.get("/:date", function (request, response) {
  const {params, query} = request
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" }
  let date = new Date(params.date)

  // Handle unix timestamp,
  if (!/[^\d]/.test(params.date)) {
    date = new Date(parseInt(params.date) * 1000)
  } 
  
  let natural = date.toLocaleDateString("en-us", options)
  let unix = date.getTime() / 1000
  // Sends the JSON response
  response.json({
    unix: unix || null, 
    natural: natural === 'Invalid Date' ? null : natural
  })
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

var express = require('express');

var app = express();

// Set up template engine
app.set('view engine', 'ejs');

// Static Files
app.use(express.static('./public'));

app.listen(3000);
console.log("You're listening to port 3000");


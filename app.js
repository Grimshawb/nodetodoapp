var express        = require('express');
var todoController = require('./controllers/todoController');

var app = express();

// Set up template engine
app.set('view engine', 'ejs');

// Static Files
app.use(express.static('./public'));

// Fire Controllers
todoController(app)

app.listen(3000);
console.log("You're listening to port 3000");


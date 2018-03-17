var bodyParser = require('body-parser');

var data = [{item: "thing 1"}, {item: "thing 2"}, {item: "thing 3"}];
var urlEncoded = bodyParser.urlencoded({extended: false});

module.exports = function(app) {

    // Routes
    app.get('/todo', function(req, res){
        res.render('todo', {todos: data});
    });

    app.post('/todo', urlEncoded, function(req, res){
       data.push(req.body);
       res.json(data);
    });

    app.delete('/todo/:item', function(req, res){
       data = data.filter(function(todo) {
           // This is conditional that will filter out an item that matches
        return todo.item.replace(/ /g, '-') !== req.params.item;
        res.render('todo', {todos: data});
       }); 
    });

}
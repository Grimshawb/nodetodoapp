var data = [{item: "thing 1"}, {item: "thing 2"}, {item: "thing 3"}];

module.exports = function(app) {

    // Routes
    app.get('/todo', function(req, res){
        res.render('todo', {todos: data});
    });

    app.post('/todo', function(req, res){
        
    });

    app.delete('/todo', function(req, res){
        
    });

}
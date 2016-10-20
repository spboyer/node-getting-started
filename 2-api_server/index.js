var express = require('express'),
    app = express();

app.get('/people', function(req, res){
    var people = [];
    people.push({"id": 1, "first": "Shayne", "last": "Boyer"});
    people.push({"id": 2, "first": "James", "last": "Jones"});
    
    res.send(200, people);
});

app.listen(process.env.PORT || 3001);
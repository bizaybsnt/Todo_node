var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));

todoController(app);


app.listen(5000);
console.log('listening to port:5000');
// app.use

// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));
//
// app.get('/', function (req, res) {
//     res.sendFile(__dirname +'/views/index.html');
// });
//
// app.post('/submit-data', function (req, res) {
// 	var name = req.body.body;
//
//     res.send(name + ' Submitted Successfully!');
//     // res.sendFile(__dirname +'/views/index.html');
// });
//
//
// var server = app.listen(5000, function () {
//     console.log('Node server is running..');
// });


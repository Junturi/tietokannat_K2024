var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var exampleRouter = require('./routes/example');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/example',  exampleRouter);


//Tehtävä 15

//GET-metodi yhdellä parametrilla, tehtynä suoraan app.js:ään
//Loput metodit erikseen routes/example-tiedostossa
app.get('/example/:name',
    function(request,response){
        response.send('Hello '+request.params.name+ '! This is an example of GET-method with one parameter in app.js.');
        console.log('Example of one parameter in apps.js');
    }
);

//POST-metodi
app.post('/',
    function(request,response){
        response.send(request.body);
        console.log(request.body);
    }
);

module.exports = app;

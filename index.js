const express = require('express');
const mysql = require('mysql');
var logger = require('morgan');
var cors = require("cors");
var path = require('path');
var bodyParser = require('body-parser');

var routesGimnasio = require('./app_gimnasio/routes/index')
var funcionesSeguridad = require('./app_seguridad/routes/index')


const PORT = process.env.PORT || 3006;

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json({ limit: '555mb' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routesGimnasio);
app.use('/auth', funcionesSeguridad);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'developments') {
    app.use(function (err, req, res, next) {
        if (err.name === "UnauthorizedError") {
            res.status(401);
            res.json({ "message": err.name + ":" + err.message });
        }
        else {
            res.status(err.status).json('error');
            res.status(err.status || 500);
            res.json('error', {
                message: err.message,
                error: err
            });
        }
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    console.log(err);
    res.json({ "mensaje": "not found" });
});

app.listen(PORT, () => console.log('Server running on port '+ PORT));
console.log("servidor-------------------------------------------------");

module.exports = app;



/*
//MySql
const conection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root@123',
    database:'gimnasio'
});

//Route
app.get('/', (req,res)=> {
    res.send('Welcome api yes')
})

//all customers
app.get('/customers',(req,res) =>{
    res.send('list of coustumers');
})

app.post('/add', (req,res) =>{

});
//check connect
conection.connect(error => {
    if(error) {return error; }
console.log("Conexion Runiiing");

}) ;

app.listen(PORT, () => console.log('Server running on port '+ PORT));*/
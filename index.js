
var express = require('express');
var cors = require('cors');
var app = express();

var morgan = require('morgan'); //log request to the console
var bodyParser = require('body-parser'); //pull information form HTML POST
var methodOverride = require('method-override'); //simula DELETE y PUT

var routes = require('./server/routes'); // importa las rutas que tenemos con el express
var eventos = require('./server/controllers/evento'); //importa el controlador de eventos

app.use(cors());
//servir contenidos estáricos del directorio    
app.use(express.static(__dirname));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(routes(express.Router()));

var models = require('./server/models');
models.sequelize
    .authenticate()
    .then(function(){
        console.log("Conexión realizado con exito.!");
    })
    .catch(function(error){
        console.log("Error "+ error);
    });

    app.listen(2000, function(){
        console.log("App listening on port 2000");
});


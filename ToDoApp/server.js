var express = require('express');
var app = express();
var path = require('path');

app.use('/',express.static(__dirname));

app.listen(3000,function () {
 console.log('Nuestra webapp To-Do ya escucha en puerto 3000!');
});

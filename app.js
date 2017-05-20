var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
const swig = require('swig');
var method_override = require('method-override'); // Módulo para sobreescribir rutas



var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); 
swig.setDefaults('views', {cache:false});
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
app.use(express.static("public"));
app.use(method_override("_method")); 		// Variable que se usará para redefinir métodos
app.use('/',routes);

app.listen(process.env.PORT || 8000 ,function(){
	console.log("La app corriendo en el puerto 8001");
})
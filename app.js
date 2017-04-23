var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
const swig = require('swig');


var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); 
swig.setDefaults('views', {cache:false});
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
app.use(express.static("public"));
app.use('/',routes);

app.listen(8000,function(){
	console.log("La app corriendo en el puerto 8000");
})
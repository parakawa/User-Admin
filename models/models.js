// **************  Zona de importación de paquetes
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var data_config = require('../controllers/data_config.js');

var url = data_config.mongolab.MONGOLAB_URI;

var uristring = 
  url || 
  'mongodb://localhost/user_admin';

// **************  Conexión a la base de datos
mongoose.connect(uristring, function (err, res) {
  if (err) { 
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
});

// **************  Schemas
var userSchemaJSON = {
	firstname: String,
	lastname: String,
	email: String,
	password: String
};

// **************  Definimos los getters del schema
var userSchema = new Schema(userSchemaJSON);


// **************  Generación de modelos
// A partir del Schema podemos generar un modelo
var User = mongoose.model("User", userSchema);

// **************  Exportar modelos
exports.User = User;
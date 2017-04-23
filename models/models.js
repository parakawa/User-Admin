// **************  Zona de importación de paquetes
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// **************  Conexión a la base de datos
mongoose.connect('mongodb://localhost/user_admin');

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
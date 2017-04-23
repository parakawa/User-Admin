var models = require('../models/models.js'); 

exports.signUp = function(req, res){
	console.log(req.body.firstname);
		var data = {
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			email: req.body.email,
			password:req.body.password,
		};
		var user = new models.User(data);
		user.save(function(err){
				console.log("esto es un error "+err);
				console.log("user "+user);
				res.render('index');
			});
}

exports.login = function(req, res){
	var email = req.body.email;
	models.User.findOne({"email": email},function(err,user){
		if(!err){
			console.log("usuario encontrado "+user);
			if(user==null){
				res.send("Usuario no existente");	
			} else{
				if(user.password===req.body.password){
					res.send("Ingresado con éxito");
				}
				else{
					res.send("Error en contraseña");
				}
			}
			
		}
		else{
			console.log(err);
		}
		
	});

}
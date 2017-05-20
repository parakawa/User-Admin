var models = require('../models/models.js'); 

exports.index = function (req, res){
	res.render('index');
};

exports.admin = function (req, res){
	models.User.find(function(err, users){
		if(err){console.log(err);}
		res.render('admin/index', {users: users });
	});
};

exports.edit = function(req, res){
	var id_user = req.params.id;
	console.log(id_user);
	models.User.findOne({"_id": id_user},function(err,user){
		res.render("admin/edit", {user: user});
	});
};

exports.put = function(req, res){
		console.log(req.body);
		var data = {
			firstname: req.body.firstname,
			lastname: req.body.lastname,
		};
		models.User.update({"_id": req.params.id}, data, function(user){
			res.redirect("/admin");
			});
};

exports.delete = function(req, res){
		models.User.remove({"_id": req.params.id}, function(user){
			res.redirect("/admin");
		});
	

};

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
	var id_user = req.params._id;
	console.log(id_user);
	models.User.findOne({"_id": id_user},function(err,user){
		res.render("admin/edit", {user: user});
	});
};

var models = require('../models/models.js'); 
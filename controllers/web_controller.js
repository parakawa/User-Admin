exports.index = function (req, res){
	res.render('index');
};

exports.admin = function (req, res){
	models.User.find(function(err, users){
		if(err){console.log(err);}
		res.render('admin/index', {users: users });
	});
};
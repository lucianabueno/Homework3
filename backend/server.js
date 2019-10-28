var express = require('express');
var path = require('path');      // your package.json, as well as anything else you want to add
var app = express();
let router = express.Router();
app.use(express.static("../public/"));
var database = require('./database.json');


app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + "public/index.html"));
});

app.use('/api',router);

router.get('/users/:username/:password', function(req,res){
    var input_username = req.params.username;
    var input_password = req.params.password;
		console.log(input_username);
		console.log(input_password);
		var respuesta="error";
    for (var i=0; i < database.users.length; i++)
    {
        var row = database.users[i];
        if (row.username == input_username){
            if (row.password == input_password){
							  console.log("User Found");
								respuesta='<h1> Welcome Back! </h1>';
            }
        }
    }


if(respuesta=="error"){
		res.send('<h1> Incorrect username or password.</h1>');
}else{
	console.log("Welcome Back!");
	res.status(200).send(respuesta);
}

});

app.listen(9000);
console.log("Running on port 9000");

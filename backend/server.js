var express = require('express');
var path = require('path');      // your package.json, as well as anything else you want to add
var app = express();
app.use(express.static("../public/"));
var database = require('./database.json');


app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + "public/index.html"));
});

app.get('/users/:username/:password', function(req,res){
    var input_username = req.params.username;
    var input_password = req.params.password;

    for (var i=0; i < database.users.length; i++)
    {
        var row = database.users[i];
        if (row.username == input_username){
            if (row.password == input_password){
                res.send('<h1> Welcome Back! </h1>');
            }
        }
    }



res.send('<h1> Incorrect username or password.</h1>');

});

app.listen(9000);
console.log("Running on port 9000");
var httpGet = function(x)
{
    console.log(x);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        document.getElementById('user').innerHTML=xmlHttp.responseText;
    }
    xmlHttp.open("GET", x, true);
    xmlHttp.send(null);
}

var getUsers = function(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var theURL = '/api/users/'+username+'/'+password;
    httpGet(theURL);
};
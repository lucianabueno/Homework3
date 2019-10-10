var httpGet = function(x)
{
    console.log(x);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        console.log(xmlHttp.responseText);
        document.getElementById('user').innerHTML=xmlHttp.responseText;
    }
    xmlHttp.open("GET", x, false); 
    xmlHttp.send();
}

var getUser = function(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var theURL = '/users/'+username+'/'+password;
    httpGet(theURL);
};
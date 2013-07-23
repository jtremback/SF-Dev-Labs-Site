var express = require('express')
  , format = require('util').format
  , email = require("mailer")
  , domainVar="sfdevlabs.com"
  , sgusername = "slidescroll"
  , sgpassword = "rambert123"

var app = module.exports = express()

app.use(express.bodyParser())

app.get('/', function(req, res){
  res.send('Nada');
});

app.post('/', function(req, res, next){


  	 console.log(req.body)


	  var article = req.body, body=""
	  body=""
	  for (art in article) {
	   console.log(article[art])
	   body+=art+":  "
	   body+=article[art]+",  "
	  };

     email.send({
        host: "smtp.sendgrid.net",
        port: "587",
        domain: domainVar,
        to: "sfdevlabs@gmail.com",
        from: "delivery@"+domainVar,
        subject: "New SFDevLabs Lead",
        body: body,
        authentication: "login",
        username: sgusername,
        password: sgpassword
    }, function(err, result){ });

 

  res.setHeader('Location', 'http://sfdevlabs.com/');
  res.send('<meta http-equiv="refresh" content="0; url=http://sfdevlabs.com/">');
});

if (!module.parent) {
  app.listen(8080);
  console.log('Express started on port 8080');
}
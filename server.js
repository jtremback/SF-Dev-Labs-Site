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




////

var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs")
    port = process.argv[2] || 80;
 
http.createServer(function(request, response) {
 
  var uri = url.parse(request.url).pathname
    , filename = path.join(process.cwd(), uri);
  
  path.exists(filename, function(exists) {
    if(!exists) {
      response.writeHead(404, {"Content-Type": "text/plain"});
      response.write("404 Not Found\n");
      response.end();
      return;
    }
 
    if (fs.statSync(filename).isDirectory()) filename += '/index.html';
 
    fs.readFile(filename, "binary", function(err, file) {
      if(err) {        
        response.writeHead(500, {"Content-Type": "text/plain"});
        response.write(err + "\n");
        response.end();
        return;
      }
 
      response.writeHead(200);
      response.write(file, "binary");
      response.end();
    });
  });
}).listen(parseInt(port, 10));
 
console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");